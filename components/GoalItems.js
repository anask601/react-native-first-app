import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItems = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={props.styles}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItems;
