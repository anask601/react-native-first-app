import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput placeholder="Add Your Goals 💪" />
        <Button title="ADD"></Button>
      </View>
      <View></View>
    </View>
  );
}
