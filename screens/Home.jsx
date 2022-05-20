import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
  const [modalOpened, setModalOpened] = useState(false);
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

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevState) => {
      return [review, ...prevState];
    });
    setModalOpened(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpened}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              onPress={() => setModalOpened(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm onAddReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpened(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
