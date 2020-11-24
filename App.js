import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as MoviesProvider } from "./context/MoviesContext";
import TabBarNavigator from "./navigators/TabBarNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <MoviesProvider>
        <TabBarNavigator />
      </MoviesProvider>
    </SafeAreaProvider>
  );
};

export default App;
