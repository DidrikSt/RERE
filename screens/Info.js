import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

function Info() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>Fakta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    marginRight: 15,
    marginLeft: 15,
    top: 15,
  },
});

export { Info };
