import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { body: "#fff", text: "#000", card: "#fff", inputs: "#fff", footer: "#fff", navbar: "#fff", btntxtclr: "#fff", floatbtn: "#333", floatbtnicon: "#fff", common:"#4070f4"},
        dark: { body: "#333", text: "#fff", card: "#212529", inputs: "#212529", footer: "#000", navbar: "#000", btntxtclr: "#fff", floatbtn: "#fff", floatbtnicon: "#333",common:"#4070f4", mobilenavbtn: "#fff" }
    }
    toogleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state,toogleTheme: this.toogleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;