import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

export default function ReviewDetails({ route }) {
  console.log(route.params);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Text style={globalStyles.titleText}>{route.params.body}</Text>
      <Text style={globalStyles.titleText}>{route.params.rating}</Text>
    </View>
  );
}
