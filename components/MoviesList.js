import React, { useContext } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Context as MoviesContext } from "../context/MoviesContext";
import SlideInCard from "../components/animated/SlideInCard";
import TopDownCard from "../components/animated/TopDownCard";
import AppearingCard from "../components/animated/AppearingCard";

const MoviesList = (props) => {
  const { data } = props;

  return (
    <FlatList
      style={styles.list}
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderCard}
      {...props}
    />
  );
};

const renderCard = ({ item, index }) => {
  switch (item.media_type) {
    case "movie":
      return <SlideInCard data={item} index={index} />;
    case "tv":
      return <AppearingCard data={item} index={index} />;
    case "person":
      return <TopDownCard data={item} index={index} />;
    default:
      return <SlideInCard data={item} index={index} />;
  }
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  itemContainer: {
    backgroundColor: "red",
    margin: 16,
    alignItems: "center",
  },
  nameText: {
    fontSize: 14,
    color: "white",
  },
});

export default MoviesList;
