import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React from "react";
import PrimaryButton from "../component/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        // IOS有些不適用
        keyboardType="number-pad"
        // 大小寫
        autoCapitalize="none"
        // 拼字檢查，TYPE檢查
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer_inside}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer_inside}>
          <PrimaryButton>Confim</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    // elevation 陰影(boxshadow)，數字越大，陰影越大
    elevation: 4,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    // borderBottomColor要與borderBottomWidth一起使用才會有
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
