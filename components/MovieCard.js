import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import StarsRating from "../components/StarsRating";

const MovieCard = (props) => {
  const { data, index } = props;
  const reversed = index % 2 == 0;

  const posterUrl = `https://image.tmdb.org/t/p/w500${
    data.poster_path ? data.poster_path : data.profile_path
  }`;

  return (
    <View style={reversed ? styles.reversedInnerView : styles.innerView}>
      <ImageBackground
        style={reversed ? styles.reversedImage : styles.image}
        source={{ uri: posterUrl }}
      >
        <View style={reversed ? styles.reversedTriangle : styles.triangle} />
      </ImageBackground>
      <View
        style={reversed ? styles.reversedDataCotnainer : styles.dataCotnainer}
      >
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {data.title ? data.title : data.name}
          </Text>
          <Text style={styles.overview} numberOfLines={3}>
            {data.overview ? data.overview : data.known_for[0].overview}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <StarsRating
            rating={
              Math.floor(
                data.vote_average
                  ? data.vote_average
                  : data.known_for[0].vote_average
              ) / 2
            }
            iconSize={16}
          />
          <Text style={styles.ratings}>{`${
            data.vote_count ? data.vote_count : data.known_for[0].vote_count
          } ratings`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerView: {
    flex: 1,
    height: 180,
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 20,
  },
  reversedInnerView: {
    flex: 1,
    height: 180,
    flexDirection: "row-reverse",
    overflow: "hidden",
    borderRadius: 20,
  },
  image: {
    flex: 1,
    alignItems: "flex-end",
  },
  reversedImage: {
    flex: 1,
    alignItems: "flex-start",
  },
  dataCotnainer: {
    width: "60%",
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 20,
  },
  reversedDataCotnainer: {
    width: "60%",
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  overview: {
    marginTop: 12,
    fontWeight: "300",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  triangle: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderBottomWidth: 250,
    borderLeftColor: "transparent",
    borderBottomColor: "white",
  },
  reversedTriangle: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderBottomWidth: 250,
    borderLeftColor: "white",
    borderBottomColor: "transparent",
  },
  ratings: {
    fontSize: 13,
    marginRight: 8,
  },
});

export default MovieCard;
