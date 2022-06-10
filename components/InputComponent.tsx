import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputProps {
  placeholder: string;
  setFirstName?: any;
  setFirstPassword?: any;
  setSecondPassword?: any;
  setEmailField?: any;
}

const InputComponent: React.FC<InputProps> = ({
  placeholder,
  setFirstName,
  setFirstPassword,
  setEmailField,
  setSecondPassword,
}) => {
  const [focused, setFocused] = useState(true);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");

  // const checkValid = () => {
  //   let input = email.split(/@|\./);
  // if (
  //   focused &&
  //   input.length === 3 &&
  //   (input[2] === "com" || input[2] === "fr")
  // ) {
  // } else if (!email) {
  //   setEmailField(false);
  //   return (
  //     <Text style={{ color: "red", marginTop: 5 }}>
  //       A valid email address is needed
  //     </Text>
  //   );
  // } else if (focused) {
  //   return (
  //     <Text style={{ color: "red", marginTop: 5 }}>
  //       This is not a valid email
  //     </Text>
  //   );
  // }

  //   if (!email && !focused) {
  //     // setEmailField(false);
  //     return (
  //       <Text style={{ color: "red", marginTop: 5 }}>
  //         An email address is needed
  //       </Text>
  //     );
  //   } else if (
  //     // !focused &&
  //     input.length !== 3 &&
  //     (input[2] === "com" || input[2] === "fr")
  //   ) {
  //     return(
  //       <Text>This is not a valid email address</Text>
  //     )
  //   }
  // };

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
    } else {
      return <TextInput style={styles.input} placeholder={placeholder} />;
    }
  };
  return (
    <View style={styles.validation}>
      {renderInput()}
      {/* {checkValid()} */}
    </View>
  );
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
    right: "15%",
  },
});
