import React, { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavProps } from "./Navigation";
import InputComponent from "./InputComponent";

const image = require("../assets/ian-dooley-TevqnfbI0Zc-unsplash.jpg");

const SignUpFirst: React.FC<NavProps> = ({ navigation }) => {
  const [firstEmail, setFirstEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState("");

  const nextPage = () => {
    let input = firstEmail.split(/@|\./);
    if (input.length !== 3 || (input[2] !== "com" && input[2] !== "fr")) {
      setError("This is not a valid email address")
    } else if (firstEmail === "" || firstPassword === "") {
      setError("You need to fill all the fields");
    } else if (firstPassword === secondPassword) {
      navigation.navigate("SignUpSecond", {
        firstEmail: firstEmail,
        firstPassword: firstPassword,
        secondPassword: secondPassword,
      });
    } else {
      setError("Your passwords don't match");
    }
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.encart}>
          <Text style={styles.title}>Become a part of our community !</Text>
          <InputComponent placeholder="Email" setEmailField={setFirstEmail} />
          <InputComponent
            placeholder="Password"
            setFirstPassword={setFirstPassword}
          />
          <InputComponent
            placeholder="Verify your Password"
            setSecondPassword={setSecondPassword}
          />
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
            <Button title="Next" color="tomato" onPress={nextPage} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUpFirst;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  encart: {
    flex: 0.55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    width: "70%",
    height: 40,
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  title: {
    position: "absolute",
    top: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "tomato",
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: "lightblue",
    color: "lightblue",
  },
});
