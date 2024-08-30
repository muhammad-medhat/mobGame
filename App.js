import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GameStart from "./screens/GameStart";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Game from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import Colors from "./constants/Colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [numInpUser, setNumInpUser] = useState(NaN);
  const [gameOver, setGameOver] = useState(false);
  const [roundsNum, setRoundsNum] = useState(0);
  const gameOverHandle = () => {
    setGameOver(true);
  };
  const [fontsLoading, setFontsLoading] = useFonts({
    dsb: require("./assets/fonts/static/DancingScript-Bold.ttf"),
    dsm: require("./assets/fonts/static/DancingScript-Medium.ttf"),
    dssb: require("./assets/fonts/static/DancingScript-SemiBold.ttf"),
    dsr: require("./assets/fonts/static/DancingScript-Regular.ttf"),
  });
  if (fontsLoading) {
    <AppLoading />;
  }
  const handleResetGame = () => {
    console.log("reset game...");
    setNumInpUser(NaN);
    setGameOver(false);
    setRoundsNum(0);
  };
  let screen = <GameStart pick={setNumInpUser} />;
  if (numInpUser) {
    screen = <Game numInpUser={numInpUser} onGameOver={gameOverHandle} />;
  }
  if (gameOver && numInpUser) {
    screen = (
      <GameOver
        roundsNum={roundsNum}
        numInpUser={numInpUser}
        onResetGame={handleResetGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.sec1, Colors.prm1]}
      style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        imageStyle={styles.bgImg}
        style={styles.img}>
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  img: { flex: 1 },
  bgImg: { opacity: 0.35 },
});
