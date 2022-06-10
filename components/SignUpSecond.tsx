import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import InputComponent from "./InputComponent";
import { NavProps } from "./Navigation";
import DatePicker from "./DatePicker";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import DatePicker from 'react-native-date-picker'

const image = require("../assets/ian-dooley-TevqnfbI0Zc-unsplash.jpg");

const SignUpSecond: React.FC<NavProps> = ({ route, navigation }) => {
  const [civ, setCiv] = useState("");
  const [dob, setDob] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const { firstPassword, secondPassword, firstEmail } = route.params;

  const dateOfBirth = (newDob: any) => {
    setDob(newDob);
  };

  const nextPage = () => {
    if (civ === "" || dob === "" || firstName === "" || lastName === "") {
      setError("You need to fill all the fields");
    } else {
      navigation.navigate("SignInSuccess", {
        firstPassword: firstPassword,
        secondPassword: secondPassword,
        firstEmail: firstEmail,
        firstName: firstName,
        lastName: lastName,
        civ: civ,
        dob: dob,
      });
    }
  };

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
          <InputComponent
            placeholder="First Name"
            setFirstName={setFirstName}
          />
          <InputComponent placeholder="Last Name" setLastName={setLastName} />

          {/* <TextInput onChange={() => console.log(dob, firstEmail, firstPassword, secondPassword)} /> */}

          <DatePicker dateOfBirth={dateOfBirth} />
          <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>

          <View style={{ marginTop: 20 }}>
            <Button title="Sign Up" color="tomato" onPress={nextPage} />
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
