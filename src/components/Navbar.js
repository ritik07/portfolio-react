import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
      //check the true conditon
      const theme = isLightTheme ? light : dark;
      function myFunction() {
        document.body.style.backgroundColor = theme.body;
      }
      myFunction();
    return ( 
        <div>
             <nav className="navbar navbar-light navbar-expand-md sticky-top shadow" style={{backgroundColor: theme.navbar,  position: "fixed",top: 0,width: "100%"}}>
        <div className="container-fluid">
            <button style={{backgroundColor: theme.mobilenavbtn}} data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                <span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon">
                    </span>
                    </button>
            <div className="collapse navbar-collapse d-xl-flex justify-content-xl-end" id="navcol-1">
                <ul className="nav navbar-nav">
                    <li className="nav-item" role="presentation"><a className="nav-link active" href="#Profile" style={{color: theme.text}} >Profile</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#About" style={{color: theme.text}}>About</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#Skills" style={{color: theme.text}}>Skills</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#Work" style={{color: theme.text}}>Work</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#Contact" style={{color: theme.text}}>Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
     );
}
 
export default Navbar;
