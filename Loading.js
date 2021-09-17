import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View, Error } from "react-native";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";

export default function Loading() {

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content"/>
      <Text style={style.text}>규철이의 날씨 앱</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "orange",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
