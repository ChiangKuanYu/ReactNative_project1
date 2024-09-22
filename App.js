import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StartGameScreen from "./screen/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // 若沒有加flex只有element所需的範圍會改色
    flex: 1,
    backgroundColor: "#14bfc8",
  },
});
