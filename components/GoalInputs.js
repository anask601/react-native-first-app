import React, { useState } from "react";
import { Modal } from "react-native";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInputs = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const inputGoalHandler = (enteredValue) => {
    setEnteredText(enteredValue);
  };

  const goalInputHandler = () => {
    props.onAddBtn(enteredText);
    setEnteredText("");
  };
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    input: {
      width: "80%",
      borderColor: "#333",
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "40%",
    },
  });
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Add Your Goals 💪"
          style={styles.input}
          onChangeText={inputGoalHandler}
          value={enteredText}
        />
        <View style={styles.buttons}>
          <Button title="❌" onPress={props.onCancel}></Button>
          <Button title="➕" onPress={goalInputHandler}></Button>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInputs;
