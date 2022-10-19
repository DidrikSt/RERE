import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

function Maps() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.total}>Antal enheter:</Text>
      <Text>Mobil: {route.params.count} st</Text>
      <Text>Laptop: {route.params.count1} st</Text>
      <Text>Skärm: {route.params.count2} st</Text>
      <Text>Stationär: {route.params.count3} st </Text>
      <Text>Total: {route.params.totalall} kg CO₂</Text>
    </View>
  );
}
export { Maps };
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginLeft: 10,
    top: 20,
  },
  total: {
    fontWeight: "bold",
  },
});
