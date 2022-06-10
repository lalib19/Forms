import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import InputComponent from "./InputComponent";
import { NavProps } from "./Navigation";

const image = require("../assets/ian-dooley-TevqnfbI0Zc-unsplash.jpg");

const Home: React.FC<NavProps> = ({ navigation }) => {
  const [emailField, setEmailField] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [error, setError] = useState("");

  const nextPage = () => {
    let input = emailField.split(/@|\./);
    if (emailField === "" || firstPassword === "") {
      setError("You need to fill all the fields");
    } else if (
      input.length === 3 &&
      (input[2] === "com" || input[2] === "fr")
    ) {
      navigation.navigate("SignInSuccess", {
        firstEmail: emailField,
        firstPassword: firstPassword
      });
    } else {
      setError("This is not a valid email address")
    }
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.encart}>
          <Text style={styles.title}>Welcome Home !</Text>
          {/* <TextInput style={styles.input} placeholder="Email" /> */}
          <InputComponent placeholder="Email" setEmailField={setEmailField} />
          <InputComponent
            placeholder="Password"
            setFirstPassword={setFirstPassword}
          />
          <Text style={styles.link}>Forgot password ?</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>

            <Button title="Sign In" color="tomato" onPress={nextPage} />
          </View>
          <View style={styles.register}>
            <Text>
              Don't have an account yet ?{" "}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("SignUpFirst")}
              >
                Register now !
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    // height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    // borderWidth: 3,
  },
  encart: {
    flex: 0.55,
    width: "100%",
    // height: "60%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  // input: {
  //   width: "70%",
  //   height: 40,
  //   borderBottomColor: "lightgrey",
  //   borderBottomWidth: 1,
  // backgroundColor: "white",
  // marginTop: 10,
  // },
  title: {
    position: "absolute",
    top: 50,
    fontSize: 35,
    fontWeight: "bold",
    color: "tomato",
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: "lightblue",
    color: "lightblue",
    marginTop: 5,
  },
  register: {
    //   marginTop: "20%"
    position: "absolute",
    bottom: "10%",
  },
  // password: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   width: "100%",
  //   // backgroundColor: "lightgreen"
  // },
  // icon: {
  //   position: "absolute",
  //   right: "15%"
  // }
});
