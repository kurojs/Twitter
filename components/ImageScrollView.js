import React from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const halfScreenWith = Math.round(screenWidth / 2);
const imgData = [
  { id: 1, source: require("../assets/1.jpeg") },
  { id: 2, source: require("../assets/2.jpeg") },
  { id: 3, source: require("../assets/3.jpeg") },
  { id: 4, source: require("../assets/4.jpeg") },
  { id: 5, source: require("../assets/5.jpeg") },
  { id: 6, source: require("../assets/6.jpg") },
];
const halfLength = imgData.length / 2;

export default class ImageScrollView extends React.Component {
  render() {
    return (
      <ScrollView
        style={{ flex: 0.6 }}
        contentContainerStyle={styles.container}>
        <View style={styles.imageColumn}>
          {imgData.slice(0, halfLength).map(item => {
            return (
              <Image key={item.id} source={item.source} style={styles.image} />
            );
          })}
        </View>
        <View style={styles.imageColumn}>
          {imgData.slice(halfLength).map(item => {
            return (
              <Image key={item.id} source={item.source} style={styles.image} />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imageColumn: {
    flexDirection: "column",
  },
  image: {
    margin: 5,
    borderRadius: 5,
    resizeMode: "cover",
    width: halfScreenWith - 10,
  },
});
