import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../com/Title";
import PrimaryButton from "../com/PrimaryButton";
import NumberText from "../com/NumberText";
import { Ionicons } from "@expo/vector-icons";
/**
 *
 * @numInpUser {the gussed number
 * entered by user from
 * the user input in previous screen}
 * @returns
 */
export default function Game({ numInpUser, onGameOver }) {
  let [min, max] = [1, 10];
  const initRandom = genRndBetween(min, max);
  /** the first mobGuess will exclude the @numInpUser */
  const [nextGuess, setNextGuess] = useState(initRandom);
  const [numRounds, setNumRounds] = useState(0);
  const [guessNum, setGuessNum] = useState([]);

  function genRndBetween(min, max, exclude = null) {
    const rnd = Math.floor(Math.random() * (max - min)) + min;
    console.log("gen...", min, max, exclude);
    // if (exclude === rnd) {
    //   return genRndBetween(min, max);
    // }
    return rnd;
  }
  function nextTempGuess(dir) {
    console.log(`"inp, nxt comparing ${numInpUser} and ${nextGuess}`);
    if (dir === "l") {
      if (numInpUser > nextGuess) {
        Alert.alert("cheating", "dont cheat");
        return;
      }
      max = nextGuess;
    } else {
      if (numInpUser < nextGuess) {
        Alert.alert("cheating", "dont cheat");
        return;
      }
      min = nextGuess;
    }
    const ug = genRndBetween(min, max);
    setNextGuess(ug);
    setGuessNum((prev) => [ug, ...prev]);
    console
      .log
      // `ur inp is ${numInpUser}, sugg resulted in ${nextGuess}, Generating between ${min} and ${max}`
      ();
  }
  useEffect(() => {
    // debugger;
    console.log("useEffect...");
    console.log(numInpUser, nextGuess);
    if (numInpUser == nextGuess) {
      onGameOver();
    }
  }, [numInpUser, nextGuess]);
  return (
    <View style={styles.cont}>
      <Title>Mobile's Guess</Title>
      <NumberText>{nextGuess}</NumberText>
      <Text style={{ fontFamily: "dsm", fontSize: 24 }}>Higher or Lower?</Text>
      <View style={styles.btns}>
        <PrimaryButton press={() => nextTempGuess("h")}>
          <Ionicons color="white" size={24} name="add" />
        </PrimaryButton>
        <PrimaryButton press={() => nextTempGuess("l")}>
          <Ionicons color="white" size={24} name="remove" />
        </PrimaryButton>
        {/* {guessNum.map((n) => (
          <Text key={n}>{n}</Text>
        ))} */}
      </View>
      <FlatList
        data={guessNum}
        keyExtractor={(item) => item * Math.random()}
        renderItem={(item) => <Text>{item.item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100,
    // borderWidth: 1,
  },
  btns: {
    borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
    // flexDirection: "row",
  },
});
