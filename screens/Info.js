import React from "react";
import { StyleSheet, Text, View, Dimensions} from "react-native";
import { useRoute } from "@react-navigation/native";

function Info() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text style={styles.header}>Fakta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    flex: 1,
    fontSize: 25,
    alignItems: "center",
  },
  header:{
    fontSize: 25,
  }
});

export { Info };
