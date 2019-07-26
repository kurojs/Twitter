import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const avatarData = require("../assets/avatar.jpeg");

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatarImage} source={avatarData} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.title}> Tony Stark </Text>
          <Text style={styles.subTitle}> Iron Man </Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.followButton}
              onPress={() => alert("followed")}>
              <Text style={styles.buttonText}> Follow </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => alert("message send")}>
              <Feather name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
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
    alignContent: "center",
  },
  avatarWrapper: {
    flex: 0.4,
    justifyContent: "center",
  },
  avatarImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 15,
  },
  userInfo: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "white",
  },
  followButton: {
    height: 30,
    width: 90,
    borderRadius: 15,
    backgroundColor: FOLLOW_COLOR,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sendButton: {
    height: 30,
    width: 45,
    borderRadius: 15,
    backgroundColor: SEND_MESSAGE_COLOR,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
