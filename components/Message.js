import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const data = [
  {
    id: 1,
    image: require("../assets/Rectangle2.png"),
    name: "Vee",
    message: "what is up 😁",
  },
  {
    id: 2,
    image: require("../assets/Rectangle3.png"),
    name: "Rachel",
    message: "You on snapchat ?",
  },
  {
    id: 3,
    image: require("../assets/Rectangle4.png"),
    name: "Nancy",
    message: "I was just reading a book",
  },
  {
    id: 4,
    image: require("../assets/Rectangle5.png"),
    name: "Stephanie",
    message: "you are very interesting,ngl 😛",
  },
  {
    id: 5,
    image: require("../assets/Rectangle6.png"),
    name: "Jonna",
    message: "I dont have your number",
  },
];

const renderMessageItem = ({ item }) => {
  return (
    <View style={styles.messageWrapper}>
      <View>
        <Image source={item.image} style={styles.messageItemImage} />
      </View>
      <View>
        <Text style={styles.messageName}>{item.name}</Text>
        <Text style={styles.messageContent}>{item.message}</Text>
      </View>
    </View>
  );
};

const Message = () => {
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,

    borderColor: "grey",
    borderBottomWidth: 0.1,
  },
  messageItemImage: {
    height: 74,
    width: 74,
    borderRadius: 37,
    marginRight: 24,
    marginLeft: 20,
  },
  messageName: {
    fontSize: 20,
    fontWeight: "600",
  },
  messageContent: {
    fontSize: 16,
    color: "grey",
    marginTop: 5,
  },
});
