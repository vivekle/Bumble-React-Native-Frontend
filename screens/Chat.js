import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MatchQueue from "../components/MatchQueue";
import Message from "../components/Message";

const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topNavigation}>
        <Entypo name="menu" size={32} color="#6B6B6B" />
        <Ionicons name="search" size={32} color="#6B6B6B" />
      </View>
      <View
        style={{
          borderBottomColor: "#F1F1F1",
          borderBottomWidth: 3,
          marginTop: 10,
        }}
      />

      <MatchQueue />
      <View
        style={{
          borderBottomColor: "#F1F1F1",
          borderBottomWidth: 3,
          marginTop: 10,
        }}
      />
      <View style={styles.queueWrapperContainer}>
        <View style={styles.queueWrapper}>
          <Text style={styles.matchText}>Conversations </Text>
          <Text style={styles.matchNumber}> (Recent) </Text>
        </View>
        <View>
          <Ionicons name="filter" size={24} color="black" />
        </View>
      </View>

      <Message />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topNavigation: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 40,
  },
  queueWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 5,
  },
  matchText: {
    color: "black",
    fontWeight: "500",
    fontSize: 18,
  },
  matchNumber: {
    color: "grey",
    fontSize: 18,
  },
  queueWrapperContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
});
