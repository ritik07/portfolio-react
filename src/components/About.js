import React,{useContext,useRef, createRef} from 'react';
import profilepic from '../assests/images/download.png';
import { ThemeContext } from '../contexts/ThemeContext';
import Fade from 'react-reveal/Fade';

const About = () => {

    
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    //check the current state
    const theme = isLightTheme ? light : dark;

    return ( 
      
        <div>
              <div className="about_text">
            
        <div className="container about-heading">
            <div>
            <Fade top delay={200}>
                <div>
                    <h1 className="d-flex d-xl-flex justify-content-center justify-content-xl-center about-title"><strong>About</strong></h1>
                    <hr className="about_hr"></hr>
                </div>
                </Fade>
            </div>
        </div>
      
    </div>
    
    <div className="mb-100">
        <div className="container">
            <div className="row">
            <Fade top delay={400}>
                <div className="col-md-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                    <div className="d-flex justify-content-center about_img"><img src={profilepic} width="80%"/></div>
                </div>
                </Fade>
                <Fade top delay={600}>
                <div className="col-md-6 d-xl-flex align-items-xl-center">
                    <div>
                        <div>
                            <h1 className="d-flex justify-content-center justify-content-xl-start about_subtitle" style={{color:theme.text}}>I'am Ritik</h1>
                        </div>
                        <div>
                            <p className="text-justify about_text" style={{color:theme.text}}>dnsalk cxKLCnLKC ZkczMK cCmkcz ZC ZKCmzCZMCzKcmKLC zCKzMcklZ Cklz czKc zKLCmzKLCmzKc zKLcmzkczC ZKCnzkcz CzCmzKLCmzKC zczKcmzK:CmzkC zKczMckzcz ckzMczMckjsnfisd sCZKCmzKCmkzCmz CklzCmzKCzK czKLcmzKcz cZKLcmzKCmzKc zKLcnzKcmzk
                                czKcmzKcz czKLcmzKLc czk</p>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    </div>
      
        </div>
     );
}
 
export default About;