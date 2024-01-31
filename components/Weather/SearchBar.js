import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({onValueChange, input}) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Enter a city" 
        value={input}
        onChangeText={(text) => onValueChange(text)}
        // Implement functionality for onChangeText and onSubmitEditing as needed
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 18,
  },
});
