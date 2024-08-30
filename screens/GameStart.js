import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../com/PrimaryButton";
import Colors from "../constants/Colors";
import Card from "../com/Card";
import InstructionText from "../com/InstructionText";
import Title from "../com/Title";

export default function GameStart({ pick }) {
  const [num, setNum] = useState();
  const reset = (n) => {
    console.log("start...");
  };
  const confirm = () => {
    console.log("confirm...");
    if (isNaN(num) || num < 0 || num > 99) {
      Alert.alert("not Valid!!", "Not a valid number", [
        { text: "default", style: "default", onPress: () => setNum(0) },
        { text: "destructive", style: "destructive", onPress: () => setNum(0) },
        { text: "cancel", style: "cancel", onPress: () => setNum(0) },
      ]);
      return;
    }
    pick(num);
  };
  const numChange = (n) => {
    setNum(n);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={num}
          onChangeText={numChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton press={() => setNum(0)}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton press={confirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    // borderWidth: 2,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
