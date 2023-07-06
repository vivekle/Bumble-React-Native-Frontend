import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const data = [
  {
    id: 1,
    image: require("../assets/Rectangle2.png"),
  },
  {
    id: 2,
    image: require("../assets/Rectangle3.png"),
  },
  {
    id: 3,
    image: require("../assets/Rectangle4.png"),
  },
  {
    id: 4,
    image: require("../assets/Rectangle5.png"),
  },
  {
    id: 5,
    image: require("../assets/Rectangle6.png"),
  },
];

const renderQueueItem = ({ item }) => {
  return (
    <View style={styles.queueItemImageWrapper}>
      <Image source={item.image} style={styles.queueItemImage} />
    </View>
  );
};

const MatchQueue = () => {
  return (
    <View>
      <View style={styles.queueWrapper}>
        <Text style={styles.matchText}>Match Queue </Text>
        <Text style={styles.matchNumber}> (5) </Text>
      </View>

      <View style={styles.matchQueueImagesWrapper}>
        <FlatList
          data={data}
          renderItem={renderQueueItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MatchQueue;

const styles = StyleSheet.create({
  queueWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 5,
  },
  matchText: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
  matchNumber: {
    color: "grey",
    fontSize: 18,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: "50%",
  },
  queueItemImage: {
    height: 66,
    width: 66,
    borderRadius: 33,

    borderWidth: 6,
    borderColor: "white",
  },
  matchQueueImagesWrapper: {
    marginTop: 20,
  },
  queueItemImageWrapper: {
    borderWidth: 5,
    borderRadius: 51,
    borderColor: "#F6C84F",
    marginRight: 12,
  },
});
