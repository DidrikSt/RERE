import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

function Store() {
  return (
    <SafeAreaView style={styles.header}>
       <View style={styles.image}>
        <View style={styles.object}>
          <Text>Skärmskydd</Text>
          <Image source={require("../img/mobil.jpg")} style={styles.img} />
          <View style={styles.container}>
          <TouchableOpacity>
          <Text>100</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.object}>
          <Text>Mobilskal</Text>
          <Image source={require("../img/laptop.jpg")} style={styles.img} />
          <View style={styles.container}>
          <TouchableOpacity>
          <Text>300</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
      <View style={styles.image}>
        <View style={styles.object}>
          <Text>Skärmreparation</Text>
          <Image source={require("../img/skarm.jpg")} style={styles.img} />
          <View style={styles.container}>
          <TouchableOpacity>
          <Text>300</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.object}>
          <Text>Härdat glas</Text>
          <Image source={require("../img/stationar.jpg")} style={styles.img} />
          <View style={styles.container}>
          <TouchableOpacity>
          <Text>300</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "white",
    width: width,
    height: height,
  },
  image: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 20,
  },
  object: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: 130,
    height: 130,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 80,
    padding: 10,
    borderRadius: 20 / 2,
    backgroundColor: "#84daa9",
  },
});

export { Store };
