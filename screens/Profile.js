import React from "react";
import { StyleSheet, Text, View, Dimensions} from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Profile() {
  const route = useRoute();
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;
  const { count, count1, count2, count3 } = route.params;
  const total = count + count1 + count2 + count3;

  const groceriesPercentage = (count / total) * 100;
  const billsPercentage = (count1 / total) * 100;
  const regularPercentage = (count2 / total) * 100;
  const laptopPercentage = (count3 / total) * 100;
  

  const groceriesStrokeDashoffset =
    circleCircumference - (circleCircumference * groceriesPercentage) / 100;
  const billsStrokeDashoffset =
    circleCircumference - (circleCircumference * billsPercentage) / 100;
  const regularStrokeDashoffset =
    circleCircumference - (circleCircumference * regularPercentage) / 100;
const laptopDashoffset = 
circleCircumference - (circleCircumference * laptopPercentage) / 100;
  const groceriesAngle = (count / total) * 360;
  const billsAngle = (count1 / total) * 360;
  const regularAngle = (count2 / total) * 360;
  const laptopAngle = groceriesAngle + billsAngle + regularAngle;

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="account-circle" size={150} color="#454343" />
      <Text>{"\n"}</Text>
      <View style={styles.graphWrapper}>
        <Svg height="300" width="300" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            { total === 0 ? (
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#F1F6F9"
                fill="transparent"
                strokeWidth="40"
              />
             ) : (
               <>
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#F05454"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={groceriesStrokeDashoffset}
                  rotation={0}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#1bc0cc"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={billsStrokeDashoffset}
                  rotation={groceriesAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#222831"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={regularStrokeDashoffset}
                  rotation={billsAngle + groceriesAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                />
                <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#27b82e"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={laptopDashoffset}
                  rotation={laptopAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                />
               </>
             )
            }
          </G>
        </Svg>
        <Text style={styles.label}>{route.params.totalenhet} st</Text>
      </View>
      <Text style={styles.mobil}>{"\n"}{"\n"}{count} Mobil</Text>
      <Text style={styles.laptop}>{count1} Laptop</Text>
      <Text style={styles.skarm}>{count2} Skärm</Text>
      <Text style={styles.stationar}>{count3} Stationär</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  mobil: {
    color: '#F05454',
    fontWeight: "bold",
    fontSize: 20,
  },
  laptop: {
    color: '#1bc0cc',
    fontWeight: "bold",
    fontSize: 20,
  },
  skarm: {
    color: '#222831',
    fontWeight: "bold",
    fontSize: 20,
    
  },
  stationar: {
    color: '#27b82e',
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
  },
});

export { Profile };
