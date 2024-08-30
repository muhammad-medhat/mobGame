import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../com/PrimaryButton";
import Colors from "../constants/Colors";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={num}
        onChangeText={numChange}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton press={() => setNum(0)}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton press={confirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: Colors.prm1,
    elevation: 8, //android shadow
    //ios shadow
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    color: Colors.sec1,
    borderBottomColor: Colors.sec2,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  btnContainer: { flex: 1 },
});
