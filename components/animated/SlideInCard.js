import React, { useRef, useEffect } from "react";
import { Dimensions, StyleSheet, Animated } from "react-native";
import MovieCard from "../MovieCard";

const screenWidth = Dimensions.get("window").width;

const SlideInCard = (props) => {
  const { data, index } = props;
  const reversed = index % 2 == 0;

  const slideAnim = useRef(
    new Animated.Value(reversed ? screenWidth : -screenWidth)
  ).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
      delay: index < 6 ? index * 200 : 0,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View style={[styles.container, { left: slideAnim }]}>
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

export default SlideInCard;
