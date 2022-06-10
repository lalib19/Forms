import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputProps {
  placeholder: string;
  setFirstName?: any;
  setLastName?: any;
  setFirstPassword?: any;
  setSecondPassword?: any;
  setEmailField?: any;
  handleConfirm?: any;
  hideDatePicker?: any;
  showDatePicker?: any;
  datePicked?: any;
  setFirstEmail?: any;
}

const InputComponent: React.FC<InputProps> = ({
  placeholder,
  setFirstName,
  setLastName,
  setFirstPassword,
  setEmailField,
  setSecondPassword,
  // handleConfirm,
  hideDatePicker,
  showDatePicker,
  datePicked,
  setFirstEmail,
}) => {
  const [focused, setFocused] = useState(true);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");

  const renderInput = () => {
    if (placeholder === "Password") {
      return (
        <View style={styles.password}>
          <TextInput
            style={styles.input}
            secureTextEntry={visible}
            placeholder={placeholder}
            // value={text}
            onChangeText={(text) => {
              setFirstPassword(text);
              // text ? setFocused(!valid) : setFocused(false)
            }}
          />
          <Ionicons
            name={visible ? "eye-outline" : "eye-off-outline"}
            size={20}
            style={styles.icon}
            onPress={() => setVisible(!visible)}
          />
        </View>
      );
    } else if (placeholder === "Verify your Password") {
      return (
        <View style={styles.password}>
          <TextInput
            style={styles.input}
            secureTextEntry={visible}
            placeholder={placeholder}
            onChangeText={(text) => setSecondPassword(text)}
          />
          <Ionicons
            name={visible ? "eye-outline" : "eye-off-outline"}
            size={20}
            style={styles.icon}
            onPress={() => setVisible(!visible)}
          />
        </View>
      );
    } else if (placeholder === "Email") {
      return (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailField(text);
            // setFirstEmail(text);
          }}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
        />
      );
    } else if (placeholder === "First Name") {
      return (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={(text) => {
            setFirstName(text);
          }}
        />
      );
    } else if (placeholder === "Last Name") {
      return (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={(text) => {
            setLastName(text);
          }}
        />
      );
    } else if (placeholder === "Date of Birth") {
      return (
        <View style={styles.password}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onPressIn={showDatePicker}
            value={datePicked}
            onBlur={hideDatePicker}
            blurOnSubmit={true}
            // onChange={handleConfirm}
          />
          <Ionicons name="calendar" size={20} style={styles.icon} />
        </View>
      );
    } else {
      return <TextInput style={styles.input} placeholder={placeholder} />;
    }
  };
  return <View style={styles.validation}>{renderInput()}</View>;
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    width: "70%",
    height: 40,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  validation: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: "18%",
  },
});
