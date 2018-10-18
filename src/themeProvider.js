import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "./themeContext";

/**
 * @function ThemeProvider
 * @param {obj} theme Created in themeProvider
 * @param {obj} props The props passed by the parent Component
 * @returns {obj} An object that matchs with react native styles
 */
const ThemeProvider = props => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

export default ThemeProvider;
