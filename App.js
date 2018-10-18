import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ThemeProvider from "./src/themeProvider";
import withStyles from "./src/withStyles";

const styles = (theme, props) => {
  const backgroundColor = theme === "dark" ? "black" : "white";
  const color = theme === "dark" ? "white" : "black";
  return {
    backgroundColor: { backgroundColor, paddingTop: 80 },
    color: { color: props.disabled ? "red" : color }
  };
};

class TEXTY extends React.Component {
  render() {
    console.log(this.props.styles);
    console.log(this.props);
    return (
      <View style={this.props.styles.backgroundColor}>
        <Text style={this.props.styles.color}>theme</Text>
      </View>
    );
  }
}

const TEXTY_WITH_STYLES = withStyles(styles)(TEXTY);

class App extends React.Component {
  state = {
    disabled: false,
    theme: "dark"
  };
  toggleDisable = () => {
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }));
  };
  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }));
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <TouchableOpacity
            onPress={this.toggleDisable}
            style={{ marginTop: 20 }}
          >
            <Text>toggle disable</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleTheme}>
            <Text>toggle theme</Text>
          </TouchableOpacity>
          <TEXTY_WITH_STYLES disabled={this.state.disabled} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
