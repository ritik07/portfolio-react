import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Fade from 'react-reveal/Fade';

const Footer = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    //check for the true condition
    const theme = isLightTheme ? light : dark;

    return (
        <Fade top delay={200}>
        <div>
            <div class="shadow footer-clean" style={{color: "rgb(112,148,247)",backgroundColor: theme.footer}}>
                <footer>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-sm-4 col-md-3 item">
                                <h3 className="text-align-l">Projects</h3>
                                <ul className="text-align-l">
                                    <li><a href="#">Ajit Minerals</a></li>
                                    <li><a href="#">Shree Arts and Work</a></li>
                                    <li><a href="#">Reckon</a></li>
                                    <li><a href="#">Mechanical Bazaar</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-4 col-md-3 item">
                                <h3 className="text-align-l">Contact</h3>
                                <ul className="text-align-l">
                                    <li><a href="#">Ritiksingat7@gmail.com</a></li>
                                    <li><a href="#">7597690537</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 item social"><a href="#" style={{ color: "#4070f4" }}>
                            <i className="fa fa-github fs-21" style={{color: theme.common}}></i>
                            </a>
                               <a href="#">
                                <i className="fa fa-linkedin-square fs-21" style={{color: theme.common}}></i></a>
                                <a href="#"><i className="fa fa-gitlab fs-21" style={{color: theme.common}}></i></a>
                                <p class="copyright">Developed by Ritik</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </Fade>
    );
}

export default Footer;