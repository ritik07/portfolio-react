import React,{useContext} from 'react';
import profilepic from '../assests/images/download.png';
import { ThemeContext } from '../contexts/ThemeContext';
import Fade from 'react-reveal/Fade';

const Inro = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    //check the state condition
    const theme = isLightTheme ? light : dark;
    return ( 
        <div>
              <div className="mt-10 mb-100">
        <div className="container">
            <div className="row">
            
            <Fade top>
            
                <div className="col-md-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                    <div className="home_title">
                        <div>
                            <h1 className="intro-title">
                               <span style={{color: theme.text}}>
                               Hi,<br/>I'am&nbsp;
                                   </span>  
                                <span style={{color: "#4070f4"}}>Ritik</span><br/>
                                <span style={{color: theme.text}}>
                                Web Designer
                                </span>
                                </h1>
                        </div>
                        <Fade top delay={200}>
                        <div className="d-xl-flex justify-content-xl-start mb-40"><a href="https://drive.google.com/file/d/1I6OrUMmM7_v9S1iEhl-7J1_Hcy1AwfCn/view?usp=sharing" className="btn" type="button" style={{backgroundColor: "#4070f4",color: theme.btntxtclr}}>Download Resume</a></div>
                        </Fade>
                        <Fade top delay={700} cascade>
                        <div>
                            <div>
                                <p className="d-xl-flex justify-content-xl-start batch-2020">Batch 2020</p>
                            </div>
                            <div>
                                <p className="my_intro" style={{color: theme.text}}>B.Tech in Mechanical Engineering,<br/>from Jodhpur Institute of Engineering<br/>and Technology.</p>
                            </div>
                        </div>
                     
                  
                        <div>
                            <div></div>
                            <div>
                                <p className="d-xl-flex justify-content-xl-start tech-stack">Technology Stack</p>
                            </div>
                            <div>
                                <p className="about-tech-stack" style={{color: theme.text}}>HTML5, CSS3, Javascript, jQuery,<br/>Node.js, React js</p>
                            </div>
                        </div>
                     
                       
                        <p className="d-xl-flex justify-content-xl-start tech-stack">Follow me on my Social Media</p>
                        <div className="row social_icon about_social_media">
                           
                            <div className="col-xl-2 d-xl-flex justify-content-xl-center align-items-xl-center" style={{marginLeft: "15px", fontSize: "25px"}}>
                                <div><i className="fa fa-linkedin-square fs-21" style={{color: theme.text}}></i></div>
                            </div>
                           
                           
                            <div className="col-xl-2 d-xl-flex justify-content-xl-center align-items-xl-center" style={{marginLeft: "15px", fontSize: "25px"}}>
                                <div><i className="fa fa-github fs-21" style={{color: theme.text}}></i></div>
                            </div>
                            
                            
                            <div className="col-xl-2 d-xl-flex justify-content-xl-center align-items-xl-center" style={{marginLeft: "15px", fontSize: "25px"}}>
                                <div><i className="fa fa-gitlab fs-21" style={{color: theme.text}}></i></div>
                            </div>
                            
                        </div>
                        </Fade>
                    </div>
                </div>
                </Fade>
                <Fade top delay={400}>
                <div className="col-md-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                    <div className="d-xl-flex justify-content-xl-center align-items-xl-center"><img className="border rounded-circle my_img" src={profilepic} width="50%"/></div>
                </div>
                </Fade>
            </div>
        </div>
    </div>
        </div>
     );
}
 
export default Inro;