import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../component/ui/PrimaryButton";

import Colors from "../constants/color";
import Title from "../component/ui/Title";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");

  function inputHandler(inputText) {
    setEnteredValue(inputText);
  }
  function resetInputHandler() {
    setEnteredValue("");
  }
  function confirmInputHandler() {
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onConfirmNumber(choseNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.textContainer}>Enter A Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          // IOS有些不適用
          keyboardType="number-pad"
          // 大小寫
          autoCapitalize="none"
          // 拼字檢查，TYPE檢查
          autoCorrect={false}
          onChangeText={inputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer_inside}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer_inside}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 24,
    padding: 16,
    // backgroundColor: Colors.elementInside,
    borderWidth: 2,
    borderColor: Colors.elementBorder,
    borderRadius: 8,
    // elevation 陰影(boxshadow)，數字越大，陰影越大
    // elevation: 4,
  },
  textContainer: {
    textAlign: "center",
    fontSize: 20,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    // borderBottomColor要與borderBottomWidth一起使用才會有
    // borderBottomColor: Colors.textColor,
    borderBottomWidth: 2,
    // color: Colors.textColor,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer_inside: {
    flex: 1,
  },
});
