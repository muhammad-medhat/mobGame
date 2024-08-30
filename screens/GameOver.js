import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Title from "../com/Title";
import PrimaryButton from "../com/PrimaryButton";

export default function GameOver({ roundsNum, numInpUser, onResetGame }) {
  return (
    <>
      <View style={styles.cont}>
        <PrimaryButton press={onResetGame}>Play Again</PrimaryButton>
        <Title>Game Over</Title>
        <Image style={styles.img} source={require("../assets/success.png")} />
        <Text style={styles.info}>
          <Text style={styles.inner}>{roundsNum}</Text>
          steps to succeed for getting
          <Text style={styles.inner}>{numInpUser}</Text>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100,
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  info: {
    fontSize: 24,
    textDecorationLine: "underline",
  },
  inner: {
    fontWeight: "bold",
    textDecorationStyle: "dotted",
    marginHorizontal: 5,
  },
});
