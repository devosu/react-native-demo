import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, ImageBackground, Button } from 'react-native';
import SearchBar from './SearchBar'
import CityWeatherList from './CityWeatherList';
import backgroundImage from '../../assets/BeautifulDay.png'

const API_KEY = ''; // Replace with your actual API key


export default function WeatherApp() {
  const [input, setInput] = useState('');
  const [cities, setCities] = useState([]);


  const handleSearch = async () => {
    console.log("The input is " + input)

    // Geocoding API: https://openweathermap.org/api/geocoding-api
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=20&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log("The data is")
    console.log(data)

    // Forecast API: https://openweathermap.org/forecast5
    // Step 2: Fetch 5-day/3-hour forecast data for each city
    // Multiple asyncronous operations are occuring at once 
    const forecastData = await Promise.all(data.map(async (city) => {
      const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}`
      );
      const forecast = await forecastResponse.json();
      console.log(forecast)
      return { city, forecast };
    }));
    setCities(forecastData);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SearchBar input={input} onValueChange={setInput} />
        <Button title="Search" onPress={handleSearch} />
        <CityWeatherList returnedCities={cities} />
      </SafeAreaView>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});
