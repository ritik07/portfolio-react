import React, { useContext } from 'react';
import imgskill from '../assests/images/skillimg.jpg';
import { ThemeContext } from '../contexts/ThemeContext';
import Fade from 'react-reveal/Fade';


const Skills = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    //check true condition
    const theme = isLightTheme ? light : dark;
    return (
        <div>
              <Fade top delay={200}>
            <section className="skill_subtitle">
                <div className="container skill-heading">
                    <div>
                        <div>
                            <h1 className="d-flex d-xl-flex justify-content-center justify-content-xl-center skill_title"><strong>Skills</strong></h1>
                            <hr className="hr"></hr>
                        </div>
                    </div>
                </div>
            </section>
            </Fade>
           
            <div className="mb-100">
                <div className="container">
                    <div className="row">
                   
                        <div className="col-md-6 d-xl-flex align-items-xl-start">
                            <div>
                            <Fade top delay={400}>
                                <div>
                                    <h1 className="d-flex justify-content-center justify-content-xl-start skill_subtitle text-align-l" style={{ color: theme.text }}>Profesional Skills</h1>
                                </div>
                                </Fade>
                                <Fade top delay={450}>
                                <div className="skill_text text-align-l" style={{ color: theme.text }}>
                                    <p> 
        I am currently working on react js and node js, and learning react native.<br/> Am skilled in developing REST API's and integrating them using GraphQL Gateway.
        </p>
                                </div>
                                </Fade>
                                <div>
                                     <Fade top delay={600}>
                                    <div className="card skill_data mb-10" style={{ backgroundColor: theme.card }}>
                                        <div className="card-body p-10-20">
                                            <div className="d-xl-flex justify-content-xl-start">
                                                <div className="d-xl-flex justify-content-xl-center">
                                                    <i className="fa fa-html5 html"></i>
                                                    <h6 className="text-muted mb-2 card-title">HTML5</h6>
                                                </div>
                                                <div className="d-xl-flex justify-content-xl-end align-items-xl-end width-100">
                                                    <h1 className="d-flex justify-content-end fs-16" style={{color: theme.text}}>90%</h1>
                                                </div>
                                            </div>
                                            <div className="html_prog_bar"></div>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade top delay={650}>
                                    <div className="card skill_data mb-10" style={{ backgroundColor: theme.card }}>
                                        <div className="card-body p-10-20">
                                            <div className="d-xl-flex justify-content-xl-start">
                                                <div className="d-xl-flex justify-content-xl-center">
                                                    <i className="fa fa-css3 css3"></i>
                                                    <h6 className="text-muted mb-2 card-title">CSS3</h6>
                                                </div>
                                                <div className="d-xl-flex justify-content-xl-end align-items-xl-end width-100">
                                                    <h1 className="d-flex justify-content-end fs-16" style={{color: theme.text}}>75%</h1>
                                                </div>
                                            </div>
                                            <div className="css3_prog_bar"></div>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade top delay={700}>
                                    <div className="card skill_data mb-10" style={{ backgroundColor: theme.card }}>
                                        <div className="card-body p-10-20">
                                            <div className="d-xl-flex justify-content-xl-start">
                                                <div className="d-xl-flex justify-content-xl-center">
                                                    <i className="icon ion-social-javascript d-xl-flex justify-content-xl-center align-items-xl-center js_icon"></i>
                                                    <h6 className="text-muted mb-2 card-title">Javascript</h6>
                                                </div>
                                                <div className="d-xl-flex justify-content-xl-end align-items-xl-end w-100">
                                                    <h1 className="d-flex justify-content-end fs-16" style={{color: theme.text}}>70%</h1>
                                                </div>
                                            </div>
                                            <div className="javascript_prog_bar"></div>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade top delay={750}>
                                    <div className="card skill_data mb-10" style={{ backgroundColor: theme.card }}>
                                        <div className="card-body p-10-20">
                                            <div className="d-xl-flex justify-content-xl-start">
                                                <div className="d-xl-flex justify-content-xl-center">
                                                    <i className="icon ion-social-nodejs d-xl-flex justify-content-xl-center align-items-xl-center node_js_icon"></i>
                                                    <h6 className="text-muted mb-2 card-title">Nodejs</h6>
                                                </div>
                                                <div className="d-xl-flex justify-content-xl-end align-items-xl-end w-100">
                                                    <h1 className="d-flex justify-content-end fs-16" style={{color: theme.text}}>60%</h1>
                                                </div>
                                            </div>
                                            <div className="nodejs_prog_bar"></div>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade top delay={800}>
                                    <div className="card skill_data mb-10" style={{ backgroundColor: theme.card }}>
                                        <div className="card-body p-10-20">
                                            <div className="d-xl-flex justify-content-xl-start">
                                                <div className="d-xl-flex justify-content-xl-center"><i className="fab fa-react react_icon"></i>
                                                    <h6 className="text-muted mb-2 card-title">Reactjs</h6>
                                                </div>
                                                <div className="d-xl-flex justify-content-xl-end align-items-xl-end w-100">
                                                    <h1 className="d-flex justify-content-end fs-16" style={{color: theme.text}}>50%</h1>
                                                </div>
                                            </div>
                                            <div className="react_prog_bar"></div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <Fade top delay={600}>
                        <div className="col-md-6 d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center skill_img"><img className="rounded" src={imgskill} width="80%" /></div>
                        </Fade>
                    </div>
                </div>
            </div>
              
        </div>
    );
}

export default Skills;
