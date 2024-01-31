// Safe Area View - Render Content 
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import FirstExample from './components/firstExample';
import MultipleProps from './components/multipleProps';
import ReactHookExample from './components/ReactHookExample';
import ScrollViewChaos from './components/ScrollViewChaos';
import NavigationExample from './components/NavigationExample'
import WeatherApp from './components/Weather/WeatherApp'


// This demo has a bunch of different components I will go through and explain in detail for writing code 
// in React Native 
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/*
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
     <Card>
       <AssetExample />
      </Card> */}
      
      <FirstExample/>
      {/* <MultipleProps/> */}
      {/* <ReactHookExample/> */}
      {/* <ScrollViewChaos/> */}
      {/*<NavigationExample/>*/}
      {/*<WeatherApp/>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
