import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../../constants/color";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Play-Write",
    color: "black",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.elementBorder,
    padding: 16,
    marginHorizontal: 24,
  },
});
