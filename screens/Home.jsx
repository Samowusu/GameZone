import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/globalStyles";

export default function Home({ navigation }) {
  console.log(navigation);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: 1,
    },
    {
      title: "Gotta catch them all (again)",
      rating: 4,
      body: "lorem ipsum",
      key: 2,
    },
    { title: 'Not so "Final" fantasy', rating: 3, body: "lorem ipsum", key: 3 },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
