import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface SuccessProps {
  route?: any;
  // firstName?: string;
  // lastName?: string;
  // dob?: string;
  // firstEmail?: string;
  // firstPassword?: string;
  // secondPassword?: string;
  // civ?: string;
}

const SignInSuccess: React.FC<SuccessProps> = ({ route }) => {
  const {
    firstName,
    lastName,
    dob,
    firstEmail,
    firstPassword,
    secondPassword,
    civ,
  } = route.params
  return (
    <View style={styles.container}>
      <Text>Welcome machin !</Text>
      <Text>Ton first name est {firstName}</Text>
      <Text>Ton last name est {lastName}</Text>
      <Text>Ton firstEmail est {firstEmail}</Text>
      <Text>Ton firstPassword est {firstPassword}</Text>
      <Text>Ton secondPassword est {secondPassword}</Text>
      <Text>Ton civ est {civ}</Text>
      <Text>Ton dob est {dob}</Text>
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
    justifyContent: "center",
  },
});
