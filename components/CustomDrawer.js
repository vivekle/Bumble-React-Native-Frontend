import { View, Text, Touchable } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import DrawerComponent from "./DrawerComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, marginLeft: 20 }}>
      <View style={{ marginTop: 40 }}>
        <Text>Choose a connection</Text>
      </View>

      <View>
        <TouchableOpacity>
          <DrawerComponent
            pic={require("../assets/bumble_yellow1.png")}
            title="date"
            text="Make moves to find that spark"
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <DrawerComponent
            pic={require("../assets/bumble_blue.png")}
            title="bff"
            text="Make friends and find  community"
          />
        </TouchableOpacity>
      </View>
      {/* <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView> */}
    </View>
  );
};

export default CustomDrawer;
