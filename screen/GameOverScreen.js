import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Title from "../component/ui/Title";
import Colors from "../constants/color";
import PrimaryButton from "../component/ui/PrimaryButton";

const GameOverScreen = ({ roundNumber, userNumber, startNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.Image}
          source={require("../assets/image/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone Needed <Text style={styles.highLight}>{roundNumber}</Text>{" "}
        Rounds To Guess The Number{" "}
        <Text style={styles.highLight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={startNewGame}>Start New Game!</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  imageContainer: {
    width: "80%",
    aspectRatio: 1,
    borderRadius: 200,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
    marginBottom: 0,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "Play-Write",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highLight: {
    fontFamily: "Play-Write",
    // fontWeight: "bold",
    color: Colors.highLightText,
  },
});
