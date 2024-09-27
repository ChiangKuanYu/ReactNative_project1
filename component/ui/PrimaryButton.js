import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

import Colors from "../../constants/color";

// 按鈕設計，children要用大括號括起來
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.iospress]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.AndroidRipple }}
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
    backgroundColor: Colors.buttonBackground,
    elevtion: 4,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  iospress: {
    opacity: 0.75,
  },
});
