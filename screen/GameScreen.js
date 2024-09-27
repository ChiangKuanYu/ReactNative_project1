import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../component/ui/Title";
import NumberContainer from "../component/game/NumberContainer";
import PrimaryButton from "../component/ui/PrimaryButton";
import GuessLogItem from "../component/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
  // if (rndNum === exclude) {
  //   return generateRandomBetween(min, max, exclude);
  // } else {
  //   return rndNum;
  // }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentNumber, setCurrentNumber] = useState(initialGuess);
  const [roundGuess, setRoundGuess] = useState([initialGuess]);
  useEffect(() => {
    if (currentNumber === userNumber) {
      onGameOver(roundGuess.length);
    }
  }, [currentNumber, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentNumber < userNumber) ||
      (direction === "greater" && currentNumber > userNumber)
    ) {
      // 說謊造成邏輯錯誤
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentNumber;
    } else {
      minBoundary = currentNumber + 1;
    }

    const newnumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentNumber
    );

    console.log(minBoundary, maxBoundary, newnumber);
    setCurrentNumber(newnumber);
    setRoundGuess((prevRoundGuess) => [newnumber, ...prevRoundGuess]);
  }

  const roundNumber = roundGuess.length;

  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's Guess</Title>
      <View style={styles.gameScreen}>
        <NumberContainer>{currentNumber}</NumberContainer>
        <Text style={styles.textContainer}>Lower or Greater?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainers}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainers}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.listContainers}>
        {/* {roundGuess.map((guessRound) => (<Text key={guessRound}>{guessRound}</Text>))} */}
        <FlatList
          data={roundGuess}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={roundNumber - itemData.index}
              Guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  gameScreen: {
    padding: 12,
  },
  textContainer: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 12,
    justifyContent: "center",
  },
  buttonContainers: {
    flex: 1,
  },
  listContainers: {
    flex: 1,
    padding: 16,
  },
});
