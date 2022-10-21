import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Alert,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { useState } from "react";
function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const onPress1 = () => setCount((prevCount) => prevCount + 1);
  const onPress2 = () => {
    if (count > 0 && count < 100) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const total = count * 80;
  const [count1, setCount1] = useState(0);
  const onPress3 = () => setCount1((prevCount) => prevCount + 1);
  const onPress4 = () => {
    if (count1 > 0 && count1 < 100) {
      setCount1((prevCount) => prevCount - 1);
    }
  };
  const total1 = count1 * 300;

  const [count2, setCount2] = useState(0);
  const onPress5 = () => setCount2((prevCount) => prevCount + 1);
  const onPress6 = () => {
    if (count2 > 0 && count2 < 100) {
      setCount2((prevCount) => prevCount - 1);
    }
  };
  const total2 = count2 * 250;

  const [count3, setCount3] = useState(0);
  const onPress7 = () => setCount3((prevCount) => prevCount + 1);
  const onPress8 = () => {
    if (count3 > 0 && count3 < 100) {
      setCount3((prevCount) => prevCount - 1);
    }
  };
  const total3 = count3 * 150;
  const totalall = total + total1 + total2 + total3;
  const register = () => {
    navigation.navigate("Maps", {
      totalall: totalall,
      count: count,
      count1: count1,
      count2: count2,
      count3: count3,
    });
  };

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.image}>
        <View style={styles.object}>
          <Text>Mobil</Text>
          <Image source={require("../img/mobil.jpg")} style={styles.img} />
          <View style={styles.button}>
            <TouchableOpacity style={styles.knapp} onPress={onPress2}>
              <Text style={styles.add}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}> {count} </Text>
            <TouchableOpacity style={styles.knapp} onPress={onPress1}>
              <Text style={styles.add}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.object}>
          <Text>Laptop</Text>
          <Image source={require("../img/laptop.jpg")} style={styles.img} />
          <View style={styles.button}>
            <TouchableOpacity style={styles.knapp} onPress={onPress4}>
              <Text style={styles.add}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}> {count1} </Text>
            <TouchableOpacity style={styles.knapp} onPress={onPress3}>
              <Text style={styles.add}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.image}>
        <View style={styles.object}>
          <Text>Skärm</Text>
          <Image source={require("../img/skarm.jpg")} style={styles.img} />
          <View style={styles.button}>
            <TouchableOpacity style={styles.knapp} onPress={onPress6}>
              <Text style={styles.add}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}> {count2} </Text>
            <TouchableOpacity style={styles.knapp} onPress={onPress5}>
              <Text style={styles.add}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.object}>
          <Text>Stationär</Text>
          <Image source={require("../img/stationar.jpg")} style={styles.img} />
          <View style={styles.button}>
            <TouchableOpacity style={styles.knapp} onPress={onPress8}>
              <Text style={styles.add}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}> {count3} </Text>
            <TouchableOpacity style={styles.knapp} onPress={onPress7}>
              <Text style={styles.add}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.feeback}>
        <Text style={styles.titlefeedback}>Feedback</Text>
        <Text>Mobil totalt {total} kg CO₂</Text>
        <Text>Laptop totalt {total1} kg CO₂</Text>
        <Text>Skärm totalt {total2} kg CO₂</Text>
        <Text>Stationär totalt {total3} kg CO₂</Text>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {totalall} kg CO₂
        </Text>
      </View>
      <TouchableOpacity onPress={register}>
        <View style={styles.container}>
          <Text>Lämna in</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export { HomeScreen };
const styles = StyleSheet.create({
  knapp: {
    width: 25,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    fontSize: 20,
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
  },
  headerTitleAlign: "center",
  header: {
    backgroundColor: "white",
    flex: 1,
    height: 2000,
    paddingTop: StatusBar.currentHeight,
  },
  object: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
  },
  img: {
    width: 100,
    height: 100,
  },
  count: {
    margin: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 150,
    top: 15,
    padding: 15,
    borderRadius: 100 / 2,
    backgroundColor: "#84daa9",
  },
  titlefeedback: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  feeback: {
    top: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
