import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PrimaryButton({ children, press }) {
  return (
    <View style={styles.outer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.inner, styles.pressesStyle] : styles.inner
        }
        android_ripple={{ color: "red" }}
        onPress={press}>
        <Text style={styles.txt}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    // width: "100%",
    alignItems: "stretch",
  },
  inner: {
    backgroundColor: "#72063c",
    padding: 8,
    elevation: 2,
  },
  txt: { textAlign: "center", color: "#FFF" },
  pressesStyle: { opacity: 0.75, backgroundColor: "green" },
});
