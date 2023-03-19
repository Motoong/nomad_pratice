import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, ScrollView,Dimensions } from "react-native";

const{width:SCREEN_WIDTH}=Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <View style={styles.city}>
        <Text style={styles.cityname}>대전</Text>
      </View>
      <ScrollView 
        pagingEnabled={true}
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  cityname: {
    fontSize: 68,
    fontWeight: "600",
  },
  weather: {
    //backgroundColor:"blue"
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp:{
    marginTop: 40,
    fontSize: 150,
    fontWeight: "600"
  },
  description:{
    marginTop: -20,
    fontSize: 60,
  }
});
