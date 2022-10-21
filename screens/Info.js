import React from "react";
import { StyleSheet, Text, View, Dimensions} from "react-native";
import { useRoute } from "@react-navigation/native";

function Info() {
  const route = useRoute();
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
    // position: "absolute",
    marginRight: 15,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text:{
    flex: 1,
    marginLeft: 15,
    top: 15,
  }
});

export { Info };
