import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";

interface DateProps {
  dateOfBirth: any;
}

const DatePicker: React.FC<DateProps> = ({ dateOfBirth }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    hideDatePicker();
    setDate(date.toLocaleDateString());
    dateOfBirth(date.toLocaleDateString())
  };

  return (
    <View style={styles.container}>
      <View style={styles.password}>
        <TextInput
          style={styles.input}
          onPressIn={showDatePicker}
          placeholder="Date of Birth"
          value={date}
          // onChange={dateOfBirth}
          // onBlur={hideDatePicker}
          // blurOnSubmit={true}
        />
        <Ionicons name="calendar" size={20} style={styles.icon} />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue"
  },
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
