import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

import TabNavigator from "./navigation/TabNavigator";
import Chat from "./screens/Chat";
import AppStack from "./navigation/AppStack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: true }}
        />
      </Stack.Navigator> */}
      <AppStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
