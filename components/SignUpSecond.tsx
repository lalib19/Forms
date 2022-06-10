import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import InputComponent from "./InputComponent";
import { NavProps } from "./Navigation";
import DateTimePicker from "@react-native-community/datetimepicker";
// import DatePicker from 'react-native-date-picker'

const image = require("../assets/ian-dooley-TevqnfbI0Zc-unsplash.jpg");

const SignUpSecond: React.FC<NavProps> = ({ navigation }) => {
  const [civ, setCiv] = useState("");
  const [date, setDate] = useState("");

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.encart}>
          <Text style={styles.title}>One last step !</Text>
          <Picker
            selectedValue={civ}
            onValueChange={(value, index) => setCiv(value)}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Choose your civility" value="Unknown" />
            <Picker.Item label="Monsieur" value="Monsieur" />
            <Picker.Item label="Madame" value="Madame" />
            <Picker.Item label="Autre" value="Autre" />
          </Picker>
          <InputComponent placeholder="First Name" />
          <InputComponent placeholder="Last Name" />

          {/* <InputComponent placeholder="Date place holder" /> */}
          {/* <DateTimePicker value={new Date()} onChange={() => setDate} /> */}

          <View style={{ marginTop: 20 }}>
            <Button
              title="Sign Up"
              color="tomato"
              onPress={() => navigation.navigate("SignInSuccess")}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUpSecond;

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
    textAlign: "center",
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
  input: {
    width: "70%",
    height: 40,
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    // marginTop: 20,
    // borderRadius: 5,
  },
  title: {
    position: "absolute",
    top: 40,
    fontSize: 30,
    fontWeight: "bold",
    color: "tomato",
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: "lightblue",
    color: "lightblue",
  },
  picker: {
    width: "70%",
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    color: "grey",
    marginTop: 30,
  },
});
