import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const ThemeToggle = () => {

    const { toogleTheme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    //CHECK FOR THE TRUE CONDITION
    const theme = isLightTheme ? light : dark;
    // const btntxt = isLightTheme ? "I Love Dark Theme" : "No I Preferred";
    return (
        <a onClick={toogleTheme} style={{backgroundColor: theme.floatbtn, zIndex: 20000}} href="#" class="float">
<i class="fa fa-adjust my-float" style={{color: theme.floatbtnicon}}></i>
</a>
    );
}

export default ThemeToggle;