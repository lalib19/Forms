import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import SignInSuccess from "./components/SignInSuccess";
import Navigation from "./components/Navigation";
import React from "react";

export default function App() {
  return (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  // image: {
  //   flex: 1,
  //   width: "100%",
  //   // height: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
