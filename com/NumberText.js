import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

export default function NumberText({ children }) {
  return (
    <View style={styles.cont}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    borderWidth: 4,
    borderColor: Colors.sec1,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.sec1,
  },
});
