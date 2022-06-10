import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import SignInSuccess from "./SignInSuccess";
import SignUpSecond from "./SignUpSecond";
import SignUpFirst from "./SignUpFirst";

const Stack = createNativeStackNavigator();

export interface NavProps {
  navigation: any
  route: any
}


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUpFirst" component={SignUpFirst} />
        <Stack.Screen name="SignUpSecond" component={SignUpSecond} />
        <Stack.Screen name="SignInSuccess" component={SignInSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

