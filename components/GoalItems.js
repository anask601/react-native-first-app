import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GoalItems = (props) => {
  return (
    <View style={props.styles}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default GoalItems;
