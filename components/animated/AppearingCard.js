import React, { useRef, useEffect } from "react";
import { Dimensions, StyleSheet, Animated } from "react-native";
import MovieCard from "../MovieCard";

const screenWidth = Dimensions.get("window").width;

const AppearingCard = (props) => {
  const { data, index } = props;

  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
      delay: index < 6 ? index * 400 : 0,
    }).start();
  }, [appearingAnim]);

  return (
    <Animated.View style={styles.container} opacity={appearingAnim}>
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

export default AppearingCard;
