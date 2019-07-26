import React from "react";
import { StyleSheet, TouchableOpacity, View, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TouchableOpacity
          style={styles.instagramButton}
          onPress={() => alert("instagram touched")}>
          <Feather name="instagram" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("add touched")}>
          <Feather name="plus-circle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userButton}
          onPress={() => alert("user touched")}>
          <Feather name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },
  instagramButton: {
    marginLeft: 20,
  },
  userButton: {
    marginRight: 20,
  },
});
