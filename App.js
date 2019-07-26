import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Static from "./components/Static";
import ImageScrollView from "./components/ImageScrollView";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <Profile style={styles.profile} />
      <Static style={styles.static} />
      <ImageScrollView style={styles.imageScrollView} />
      <Footer style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    flex: 0.1,
  },
  profile: {
    flex: 0.25,
  },
  static: {
    flex: 0.15,
  },
  imageScrollView: {
    flex: 0.4,
  },
  footer: {
    flex: 0.1,
  },
});
