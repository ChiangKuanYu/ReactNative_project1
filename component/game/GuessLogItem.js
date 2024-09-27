import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/color";

const GuessLogItem = ({ roundNumber, Guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess {Guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.buttonBackground,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: Colors.buttonBackground,
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "Play-Write",
  },
});
