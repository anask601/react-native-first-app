import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInputs from "./components/GoalInputs";
import GoalItems from "./components/GoalItems";

export default function App() {
  const [currentGoal, setCurrentGoal] = useState([]);

  const valueHandler = (enteredText) => {
    setCurrentGoal((currentGoal) => [
      ...currentGoal,
      {
        id: Math.random().toString(),
        value: enteredText,
      },
    ]);
  };

  const styles = StyleSheet.create({
    screen: {
      padding: 50,
    },
    listItems: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: "#ccc",
      borderColor: "#333",
      borderWidth: 1,
    },
  });
  return (
    <View style={styles.screen}>
      <GoalInputs onAddBtn={valueHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={currentGoal}
        renderItem={(itemData) => (
          <GoalItems styles={styles.listItems} title={itemData.item.value} />
        )}
      />
    </View>
  );
}
