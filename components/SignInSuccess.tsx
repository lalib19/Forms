import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SignInSuccess = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome machin !</Text>
      <Image
        source={{
          uri: "https://i.gifer.com/3Ud3.gif",
        }}
        style={{ width: "100%", height: 300 }}
      />
    </View>
  );
};

export default SignInSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
