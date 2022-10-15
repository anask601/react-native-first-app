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
  const [isAddModal, setIsAddModal] = useState(false);

  const valueHandler = (enteredText) => {
    setCurrentGoal((currentGoal) => [
      ...currentGoal,
      {
        id: Math.random().toString(),
        value: enteredText,
      },
    ]);
    setIsAddModal(false);
  };

  const deleteHandler = (goalId) => {
    setCurrentGoal((currentGoal) =>
      currentGoal.filter((goal) => goal.id !== goalId)
    );
  };

  const onCancelHandler = () => {
    setIsAddModal(false);
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
      <Button title="Add new Goals 🚀" onPress={() => setIsAddModal(true)} />
      <GoalInputs
        onAddBtn={valueHandler}
        visible={isAddModal}
        onCancel={onCancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={currentGoal}
        renderItem={(itemData) => (
          <GoalItems
            styles={styles.listItems}
            title={itemData.item.value}
            onDelete={() => deleteHandler(itemData.item.id)}
          />
        )}
      />
    </View>
  );
}
