import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/Main";

export default function App() {
  return <Main></Main>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
