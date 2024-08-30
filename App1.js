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
import Colors from "./constants/Colors";

export default function App() {
  const [num, setNum] = useState(null);
  const disp = () => {
    return num ? <Game num={num} /> : <GameStart pick={setNum} />;
  };
  return (
    <LinearGradient
      colors={[Colors.sec1, Colors.prm1]}
      style={styles.container}>
      <ImageBackground
        source={require("./assets/dice.jpg")}
        resizeMode="cover"
        imageStyle={styles.bgImg}
        style={styles.img}>
        <SafeAreaView style={styles.container}>{disp()}</SafeAreaView>
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
