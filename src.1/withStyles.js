import React from "react";
import ThemeContext from "./themeContext";
import { StyleSheet } from "react-native";

// This function takes a component...
const withStyles = WrappedComponent => styles => {
  // ...and returns another component...
  // ... and renders the wrapped component with the fresh data!
  // Notice that we pass through any additional props
  console.log(ThemeContext);
  console.log(ThemeContext.Consumer);
  return (
    <ThemeContext.Consumer>
      {theme => {
        console.log(theme);
        const classes = getClasses(styles, theme);
        return <WrappedComponent classes={classes} {...this.props} />;
      }}
    </ThemeContext.Consumer>
  );
};

export default withStyles;

function getClasses(_styles, theme) {
  let styles = _styles;
  if (typeof _styles === "function") {
    styles = _styles(theme);
  }
  return StyleSheet.create(styles);
}
