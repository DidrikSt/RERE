import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Maps } from "./screens/Maps";
import { Info } from "./screens/Info";
import { Store } from "./screens/Store";

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Maps") {
            iconName = focused ? "map-search" : "map-search";
          } else if (route.name === "Info") {
            iconName = focused
              ? "information-variant"
              : "information-variant";
          } else if (route.name === "Store") {
            iconName = focused ? "store" : "store";
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
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
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          title: "Store",

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
