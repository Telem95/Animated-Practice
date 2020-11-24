import React, { useRef, useEffect } from "react";
import { Dimensions, StyleSheet, Animated } from "react-native";
import MovieCard from "../MovieCard";

const screenWidth = Dimensions.get("window").width;

const TopDownCard = (props) => {
  const { data, index } = props;

  const topDownAnim = useRef(new Animated.Value(index < 6 ? -200 * index : 0))
    .current;

  useEffect(() => {
    Animated.timing(topDownAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
      delay: 0,
    }).start();
  }, [topDownAnim]);

  return (
    <Animated.View style={[styles.container, { top: topDownAnim }]}>
      <MovieCard data={data} index={index} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    padding: 12,
    shadowColor: "#909CC0",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: { width: -3, height: 3 },
    // elevation: 10,
  },
});

export default TopDownCard;
