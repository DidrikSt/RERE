import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView from 'react-native-maps';



function Maps() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.total}>Antal enheter:</Text>
          <Text>Mobil: {route.params.count} st</Text>
          <Text>Laptop: {route.params.count1} st</Text>
          <Text>Skärm: {route.params.count2} st</Text>
          <Text>Stationär: {route.params.count3} st </Text>
          <Text>Total: {route.params.totalall} kg CO₂</Text>
      </View> 


      <MapView style={styles.map}
          initialRegion={{
              latitude: 62.39515037816517, 
              longitude: 17.308980899645128,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }} >
          <MapView.Marker
              coordinate={{
                  latitude: 62.39515037816517,
                  longitude: 17.308980899645128
              }}
              title={"Sundsvalls Kommunhus"}
              description={"Plats för återtag"}
          />
          
      </MapView>
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
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
  },
  total: {
    fontWeight: "bold",
  },
});
