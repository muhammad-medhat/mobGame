import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../com/Title";
import PrimaryButton from "../com/PrimaryButton";
import NumberText from "../com/NumberText";
import NumberContainer from "../com/NumberContainer";
import { Ionicons } from "@expo/vector-icons";
import Card from "../com/Card";
import InstructionText from "../com/InstructionText";
import GuessLogItem from "../com/GuessLogItem";

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
  const [guessRounds, setGuessRounds] = useState([]);

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
    setGuessRounds((prev) => [ug, ...prev]);
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
  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{nextGuess}</NumberContainer>
      <Text style={{ fontFamily: "dsm", fontSize: 24 }}>Higher or Lower?</Text>
      <View style={styles.btns}>
        <Card>
          <InstructionText style={styles.instructionText}>
            Higher or lower?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton press={nextTempGuess.bind(this, "l")}>
                <Ionicons name="remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton press={nextTempGuess.bind(this, "g")}>
                <Ionicons name="add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item * Math.random()}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
const styles1 = StyleSheet.create({
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
