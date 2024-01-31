import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import CityWeather from './CityWeather';
import SunnyWeather from '../../assets/SunnyWeather.png'
import CloudyWeather from '../../assets/CloudyWeather.png'

// Dummy data for demonstration if api doesn't work
const cities = [
  { name: 'Barcelona', icon: SunnyWeather, temperature: 29 },
  { name: 'Bilbao', icon: CloudyWeather, temperature: 27 },

  // ... add other cities
];

export default function CityWeatherList({ returnedCities }) {

  const getWeatherDetails = (forecastData, forecastDate) => {
    // Find the forecast entry for the specified date
    const selectedForecast = forecastData.list.find(entry => entry.dt_txt === forecastDate);

    if (selectedForecast) {
      // Extract weather icon code and temperature
      const weatherCode = selectedForecast.weather[0].icon;
      const iconURL = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
      console.log("the icon url is " + iconURL)
      const temperature = selectedForecast.main.temp;

      return { iconURL, temperature };
    }

    // Return null if forecast entry is not found for the specified date
    return null;
  };

 return (
    returnedCities != null &&
    returnedCities.length > 0 && (
      <ScrollView
        style={styles.container}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        {returnedCities.map(({ city, forecast }, index) => {
          const currentDate = new Date().toISOString().split("T")[0];

          // Find the forecast entry for the current date and get weather details
          const currentWeatherDetails = getWeatherDetails(
            forecast,
            `${currentDate} 12:00:00` // Assuming you want the data for 12:00:00
          );

          return (
            <CityWeather
              key={index}
              name={city.name}
              country={city.country}
              state={city.state}
              temperature={(currentWeatherDetails?.temperature-273.15)*9/5+32}
              icon={currentWeatherDetails?.iconURL}
            />
          );
        })}
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
