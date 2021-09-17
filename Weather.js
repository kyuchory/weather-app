import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#000000", "#434343"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#4B79A1", "#283E51"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#141e30", "#243b55"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#6190E8", "#A7BFE8"],
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["#4CA1AF", "#C4E0E5"],
  },
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#ff5f6d", "#ffc371"],
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#2980b9", "#2c3e50"],
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#1d4350", "#a43931"],
  },
  Mist: {
    iconName: "water",
    gradient: ["#2c3e50", "#4ca1af"],
  },
  dust: {
    iconName: "weather-windy-variant",
    gradient: ["#2c3e50", "#fd746c"],
  },
};

export default function Weather({ temp, condition, description, city }) {
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOption[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(
    [
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "dust",
    ].isRequired
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  city: {
    color: "white",
    fontSize: 30,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
});
