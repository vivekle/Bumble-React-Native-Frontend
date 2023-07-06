import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

const DrawerComponent = ({ pic, title, text }) => {
  return (
    <View style={styles.drawerComponentWrapper}>
      <View style={styles.drawerComponentLeft}>
        <View style={styles.drawerComponentIcon}>
          <Image source={pic} />
        </View>

        <View style={styles.drawerComponentTextItem}>
          <Text style={styles.drawerComponentTextTitle}>{title}</Text>
          <Text style={styles.drawerComponentText}>{text}</Text>
        </View>
      </View>

      <View style={styles.drawerComponentCheck}>
        <Octicons name="check-circle-fill" size={24} color="#F6C84F" />
      </View>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  drawerComponentWrapper: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
    padding: 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  drawerComponentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  drawerComponentIcon: {
    marginRight: 12,
  },
  drawerComponentTextTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  drawerComponentTextItem: {
    flexShrink: 1,
  },
  drawerComponentText: {
    fontWeight: "400",
    letterSpacing: 0.3,
    color: "#6B6B6B",
  },
  drawerComponentCheck: {
    borderRadius: 15,
    backgroundColor: "#ffffff",
  },
});
