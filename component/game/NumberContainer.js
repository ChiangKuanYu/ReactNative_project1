import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../../constants/color";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary500,
    padding: 24,
    borderRadius: 8,
    // marginTop: 8,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
