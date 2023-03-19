import { StatusBar } from "expo-status-bar";
import * as Location from 'expo-location';
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView,Dimensions } from "react-native";

const{width:SCREEN_WIDTH}=Dimensions.get("window");
const API_KEY ="49a7723c64474c38206352eea83a5b77";

export default function App() {
  const [city, setCity] =useState("loadding...")
  const [days, setDays] = useState([])
  const[ok, setOK] = useState(true);

  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOK(false);
    }
    const {
      coords:{latitude, longitude},
    } = await Location.getCurrentPositionAsync({accuracy:5});

    const location = await Location.reverseGeocodeAsync(
      {latitude,longitude},
      {useGoogleMaps:false}
      );
      setCity(location[0].region +" "+ location[0].district +" "+ location[0].street)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      const json = await response.json();
      setDays(json.weather[0].description);
      console.log(json);
  };

  useEffect(()=>{
    getWeather();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <View style={styles.city}>
        <Text style={styles.cityname}>{city}</Text>
      </View>
      <ScrollView 
        pagingEnabled={true}
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>{days}</Text>
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
    fontSize: 40,
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
