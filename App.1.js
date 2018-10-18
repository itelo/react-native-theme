/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ThemeProvider from "./src/themeProvider";
import withStyles from "./src/withStyles";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <View>
          <TextyThemed disabled={true} />
        </View>
      </ThemeProvider>
    );
  }
}

const styles2 = (theme, props) => ({
  text: {
    color: props.disabled ? "red" : theme.light.background
  }
});

class Texty extends Component {
  render() {
    console.log(classes);
    return <Text>classes</Text>;
  }
}

const TextyThemed = withStyles(styles2)(Texty);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
