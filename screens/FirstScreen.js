import React, { useEffect, useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Context as MoviesContext } from "../context/MoviesContext";
import MoviesList from "../components/MoviesList";

const FirstScreen = () => {
  const { fetchTrendingMovies, state } = useContext(MoviesContext);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container} forceInset={{ bottom: "never" }}>
      <StatusBar barStyle={"dark-content"} />
      <MoviesList data={state.movies} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
});

export default FirstScreen;
