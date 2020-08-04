import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    //check the true condition
    const theme = isLightTheme ? light : dark; 
    return (
        <div>
            <div className="footer-basic"></div>
            <div className="mb-40">
                <div className="container mb-20 mt-20">
                    <div>
                        <Fade top delay={200}>
                        <div>
                            <h1 className="d-flex d-xl-flex justify-content-center justify-content-xl-center contact_title contact_title"><strong>Contact</strong></h1>
                            <hr className="hr"></hr>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <div>
            <Fade top delay={400}>
        <form className="mb-20">
        
            <div class="form-group d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center contact_input">
                <input class="border rounded border-dark shadow-sm form-control" type="text" style={{width: "60%",backgroundColor: theme.inputs}} placeholder="Name"/></div>
            
            <div class="form-group d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center contact_input">
                <input class="border rounded border-dark shadow-sm form-control" type="text" style={{width: "60%",backgroundColor: theme.inputs}} placeholder="Email"/></div>
            <div class="form-group d-flex d-xl-flex justify-content-center justify-content-xl-center align-items-xl-center contact_input">
                <textarea class="border rounded border-dark shadow-sm form-control form-control-lg" style={{width: "60%",height: "150px", backgroundColor: theme.inputs}} placeholder="Description"></textarea></div>
            <div class="form-group d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center contact_input">
                <div class="d-flex d-xl-flex justify-content-end justify-content-xl-end" style={{width: "60%"}}><button class="btn btn-primary" type="button" style={{backgroundcolor: "#4070f4"}}>Submit</button></div>
            </div>
            
        </form>
        </Fade>
    </div>

        </div>
    );
}

export default Contact;