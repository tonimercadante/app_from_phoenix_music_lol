import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import Feed from "./src/view/Feed";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar />
        <Feed />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dadada",
    flex: 1,
  },
});
