import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default function App() {
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
            padding: 3,
            marginBottom: 1,
          }}
        />
        <Button title="ADD"></Button>
      </View>
      <View></View>
    </View>
  );
}
