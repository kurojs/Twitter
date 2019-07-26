import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Static extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoTextWrapper}>
          <Text style={styles.title}>210</Text>
          <Text style={styles.subTitle}>Photos</Text>
        </View>
        <View style={styles.infoTextWrapper}>
          <Text style={styles.title}>15k</Text>
          <Text style={styles.subTitle}>Followers</Text>
        </View>
        <View style={styles.infoTextWrapper}>
          <Text style={styles.title}>605</Text>
          <Text style={styles.subTitle}>Following</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "space-around",
  },
  infoTextWrapper: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "100",
    color: "grey",
  },
});
