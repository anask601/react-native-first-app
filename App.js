import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [currentGoal, setCurrentGoal] = useState([]);
  const inputGoalHandler = (enteredValue) => {
    setEnteredText(enteredValue);
  };

  const valueHandler = () => {
    setCurrentGoal((currentGoal) => [...currentGoal, enteredText]);
  };

  const styles = StyleSheet.create({
    listItems: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: "#ccc",
      borderColor: "#333",
      borderWidth: 1,
    },
  });
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Add Your Goals 💪"
          style={{
            width: "80%",
            borderColor: "#333",
            borderWidth: 1,
            padding: 1,
            marginBottom: 1,
          }}
          onChangeText={inputGoalHandler}
          value={enteredText}
        />
        <Button title="ADD" onPress={valueHandler}></Button>
      </View>
      <ScrollView>
        {currentGoal.map((goal) => (
          <View style={styles.listItems} key={Math.random()}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
