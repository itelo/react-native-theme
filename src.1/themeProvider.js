import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeContext from "./themeContext";

class ThemeProvider extends Component {
  state = {
    theme: {
      light: {
        foreground: "#000000",
        background: "#eeeeee"
      },
      dark: {
        foreground: "#ffffff",
        background: "#222222"
      }
    }
  };
  render() {
    console.log(this.props.children);
    return (
      <ThemeContext.Provider
        value={{ ...this.state.theme, ...this.props.theme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeProvider;
