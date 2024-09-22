import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

// 按鈕設計，children要用大括號括起來
const PrimaryButton = ({ children }) => {
  function pressHandler() {
    console.log("Press!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.iospress]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#34e7cc" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#34a8e7",
    elevtion: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  iospress: {
    opacity: 0.75,
  },
});
