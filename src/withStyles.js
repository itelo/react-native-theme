import React from "react";
import ThemeContext from "./themeContext";
import { StyleSheet } from "react-native";

/**
 * @function stylesCreator
 * @param {obj} theme create in themeProvider
 * @param {obj} props
 * @returns {obj} an object that matchs with react native styles
 */

/**
 * @function withStyles
 * @param {obj | stylesCreator} stylesCreator can be an object that matchs with react native styles or a function that create the styles
 * @returns {Component} that contains the styled
 */
const withStyles = stylesCreator => WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme =>
            React.createElement(WrappedComponent, {
              styles: getStyles(stylesCreator, theme, this.props)
            })
          }
        </ThemeContext.Consumer>
      );
    }
  };
};

function getStyles(stylesCreator, theme, props) {
  let styles = stylesCreator;
  if (typeof stylesCreator === "function") {
    styles = stylesCreator(theme, props);
  }
  return StyleSheet.create(styles);
}

export default withStyles;
