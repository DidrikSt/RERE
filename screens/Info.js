import React from "react";
import { StyleSheet, Text, View} from "react-native";

function Info() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text>Fakta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export { Info };
