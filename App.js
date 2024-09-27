import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from "./screen/GameScreen";
import GameOverScreen from "./screen/GameOverScreen";
import Colors from "./constants/color";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundGuess, setRoundGuess] = useState(0);

  const [fontLoading] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Play-Write": require("./assets/fonts/PlaywriteDEGrund-VariableFont_wght.ttf"),
  });

  if (!fontLoading) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setRoundGuess(numberOfRounds);
  }

  function startNewGame() {
    setGameIsOver(false);
    setUserNumber();
    setRoundGuess(0);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        setRoundGuess={setRoundGuess}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={roundGuess}
        startNewGame={startNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.Gradient1, Colors.Gradient2]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/image/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}
      >
        {/* <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView> */}
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // 若沒有加flex只有element所需的範圍會改色
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});
