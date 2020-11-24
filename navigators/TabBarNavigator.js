import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "First") {
              iconName = focused ? "numeric-1-box" : "numeric-1-box-outline";
            } else if (route.name === "Second") {
              iconName = focused ? "numeric-2-box" : "numeric-2-box-outline";
            } else if (route.name === "Third") {
              iconName = focused ? "numeric-3-box" : "numeric-3-box-outline";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          showLabel: false,
        }}
      >
        <Tab.Screen name="First" component={FirstScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
