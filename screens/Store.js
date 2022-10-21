import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

function Store() {
  return (
    <SafeAreaView style={styles.header}>
       <View style={styles.image}>
        <View style={styles.object}>
          <Text>Skärmskydd</Text>
          <Image source={require("../img/skydd.png")} style={styles.img} />
          <TouchableOpacity>
          <View style={styles.container}>
          <Text>100</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.object}>
          <Text>Mobilskal</Text>
          <Image source={require("../img/skal.jpeg")} style={styles.img} />
          <TouchableOpacity>
          <View style={styles.container}>
          <Text>300</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.image}>
        <View style={styles.object}>
          <Text>Skärmreparation</Text>
          <Image source={require("../img/trasig.jpg")} style={styles.img} />
          <TouchableOpacity>
          <View style={styles.container}>
          <Text>300</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.object}>
          <Text>Härdat glas</Text>
          <Image source={require("../img/glass.jpg")} style={styles.img} />
          <TouchableOpacity>
          <View style={styles.container}>
          <Text>300</Text>
          </View>
          </TouchableOpacity>
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
