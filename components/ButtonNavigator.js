import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ButtonNavigator() {
  // global vairiable
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Go to First Example"
        onPress={() => navigation.navigate('firstExample')}
      />
      <Button
        title="Go to Multiple Props"
        onPress={() => navigation.navigate('multipleProps')}
      />
      <Button
        title="Go to React Hook Example"
        onPress={() => navigation.navigate('ReactHookExample')}
      />
      <Button
        title="Go to ScrollView Chaos"
        onPress={() => navigation.navigate('ScrollViewChaos')}
      />
      <Button
        title="Go to Bottom Tab Navigator Helper"
        onPress={() => navigation.navigate('BottomTabNavigatorHelper')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
