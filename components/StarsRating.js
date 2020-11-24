import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const StarsRating = (props) => {
  const { rating, iconSize } = props;
  const yellowColor = "#F7D256";
  const greyColor = "#1C2030";

  const StarIcon = ({ value }) => (
    <AntDesign
      name={rating > value - 1 ? "star" : "staro"}
      size={iconSize}
      color={rating > value - 1 ? yellowColor : greyColor}
      style={styles.icon}
    />
  );

  return (
    <View {...props} style={styles.container}>
      <StarIcon value={1} />
      <StarIcon value={2} />
      <StarIcon value={3} />
      <StarIcon value={4} />
      <StarIcon value={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: { marginHorizontal: 1 },
});

export default StarsRating;
