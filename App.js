import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
} from "react-native";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "./screens/HomeScreen";
import { Maps } from "./screens/Maps";
import { Info } from "./screens/Info";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "Maps") {
            iconName = focused ? "map-outline" : "map-outline";
          } else if (route.name === "Info") {
            iconName = focused
              ? "information-circle-outline"
              : "information-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#84daa9",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "ReRE",

          // Center the header title on Android
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          title: "Maps",

          // Center the header title on Android
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          title: "Info",

          // Center the header title on Android
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs />
    </NavigationContainer>
  );
}
export const styles = StyleSheet.create({
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
