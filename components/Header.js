import React from "react";
import { StyleSheet, TouchableOpacity, View, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => alert("return touched")}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => alert("filter touched")}>
          <Feather name="grid" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  backButton: {
    marginLeft: 20,
  },
  filterButton: {
    marginRight: 20,
  },
});
