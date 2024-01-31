import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CityWeather({ name, country, state, icon, temperature }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.cityName}>{name}</Text>
          <Text style={styles.location}>{`${state}, ${country}`}</Text>
        </View>
        <View style={styles.weatherContainer}>
          <Image source={{ uri: icon }} style={styles.weatherIcon} />
          <Text style={styles.temperature}>{`${temperature.toFixed(1)}°F`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: 'gray',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  location: {
    fontSize: 16,
    color: 'black',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

