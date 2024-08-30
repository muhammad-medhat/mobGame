import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function Title({ children, style }) {
  return (
    <View style={[styles.cont, style?.cont]}>
      <Text style={[styles.text, style?.text]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: { flex: 1 },
  text: {
    textTransform: "capitalize",
    fontFamily: "dsb",
    fontSize: 24,
    borderWidth: 5,
    padding: 25,
    borderColor: Colors.sec2,
  },
});
