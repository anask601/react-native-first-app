import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInputs = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const inputGoalHandler = (enteredValue) => {
    setEnteredText(enteredValue);
  };
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      width: "80%",
      borderColor: "#333",
      borderWidth: 1,
      padding: 1,
      marginBottom: 1,
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Your Goals 💪"
        style={styles.input}
        onChangeText={inputGoalHandler}
        value={enteredText}
      />
      <Button title="ADD" onPress={() => props.onAddBtn(enteredText)}></Button>
    </View>
  );
};

export default GoalInputs;
