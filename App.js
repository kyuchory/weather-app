import React, { useCallback, useEffect, useState } from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "c18b6fcd7e6d22ef5ab8a1af34df76d2";

export default function App() {
  //view가 div와 같은 역할을 해준다.

  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(null);
  const [condition, setCondition]=useState(null);
  const [description, setDescription]=useState(null);
  const [name, setName]=useState("");

  const getWeather = useCallback(async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    getData(data);
  },[]);

  const getData = useCallback((data)=>{
    const {temp}=data.main;
    console.log(data);
    setDescription(data.weather[0].description)
    setTemp(temp);
    setCondition(data.weather[0].main);
    setName(data.name);
    setLoading();
  },[temp])

  const setLoading = useCallback(()=>{
    setIsLoading(false);
  },[]);

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;
      //altitude와 longitude를 날씨 API에 보내서 날씨정보를 가져오게끔 할 것.
      getWeather(latitude, longitude);
    } catch (errer) {
      Alert.alert("can't find you.", "So sad");
    }
  };

  useEffect(() => {
    getLocation();
  });

  return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} description={description} city={name}/>;
}

// const styles = StyleSheet.create({
//   //웹에선 flexdirection이 row가 기본인데 앱은 colunm이 기본임
//   container: {
//     flex: 1, //모든공간을 사용 가능하게함.
//     backgroundColor: "white",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 24,
//     color: "blue",
//   },
//   yellowView: {
//     flex: 1,
//     backgroundColor: "yellow",
//   },
//   blueView: {
//     flex: 2,
//     backgroundColor: "blue",
//   },
// });
