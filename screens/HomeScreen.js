import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  Dimensions,
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
            <Button title="-" onPress={onPress2}></Button>
            <Text style={styles.count}> {count} </Text>
            <Button title="+" onPress={onPress1}></Button>
          </View>
        </View>
        <View style={styles.object}>
          <Text>Laptop</Text>
          <Image source={require("../img/laptop.jpg")} style={styles.img} />
          <View style={styles.button}>
            <Button title="-" onPress={onPress4}></Button>
            <Text style={styles.count}> {count1} </Text>
            <Button title="+" onPress={onPress3}></Button>
          </View>
        </View>
      </View>
      <View style={styles.image}>
        <View style={styles.object}>
          <Text>Skärm</Text>
          <Image source={require("../img/skarm.jpg")} style={styles.img} />
          <View style={styles.button}>
            <Button title="-" onPress={onPress6}></Button>
            <Text style={styles.count}> {count2} </Text>
            <Button title="+" onPress={onPress5}></Button>
          </View>
        </View>
        <View style={styles.object}>
          <Text>Stationär</Text>
          <Image source={require("../img/stationar.jpg")} style={styles.img} />
          <View style={styles.button}>
            <Button title="-" onPress={onPress8}></Button>
            <Text style={styles.count}> {count3} </Text>
            <Button title="+" onPress={onPress7}></Button>
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
      <View style={styles.container}>
        <TouchableOpacity onPress={register}>
          <Text>Lämna in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export { HomeScreen };
var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    justifyContent: "center",
  },
  headerTitleAlign: "center",
  header: {
    backgroundColor: "white",
    width: width,
    height: height,
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
    margin: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 20,
  },
  img: {
    width: 130,
    height: 130,
  },
  count: {
    margin: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 150,
    top: 20,
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
    top: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
