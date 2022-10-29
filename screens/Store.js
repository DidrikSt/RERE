import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Store() {
  const route = useRoute();
  const { count, count1, count2, count3 } = route.params;
  const coins = (count * 100) + (count1 * 250) + (count2 * 300) + (count3 * 250);
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.cash}> 
      <MaterialCommunityIcons name="cash" size={40} color="#18ad22" />
        <Text style={styles.coin}>{coins} Poäng</Text>
        <MaterialCommunityIcons name="cash" size={40} color="#18ad22" />
      </View>
       <View style={styles.image}>
        <View style={styles.object}>
          <Text>Skärmskydd</Text>
          <Image source={require("../img/skydd.png")} style={styles.img} />
          <TouchableOpacity>
          <View style={styles.container}>
          <Text>4500</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.object}>
          <Text>Mobilskal</Text>
          <Image source={require("../img/skal.jpeg")} style={styles.img} />
          <TouchableOpacity>
          <View style={styles.container}>
          <Text>12000</Text>
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
          <Text>8000</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.object}>
          <Text>Härdat glas</Text>
          <Image source={require("../img/glass.jpg")} style={styles.img} />
          <TouchableOpacity>
          <View style={styles.container}>
          <Text>7000</Text>
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
    alignItems: "center"
  },
  cash: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  coin: {
    fontWeight:"bold",
    marginTop: 10,
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
