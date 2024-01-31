import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstExample from './firstExample'
import MultipleProps from './multipleProps'
import ReactHookExample from './ReactHookExample'
import ScrollViewChaos from './ScrollViewChaos'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonNavigator from './ButtonNavigator'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigatorHelper">
      <Stack.Screen name="firstExample" component={FirstExample} options={{ headerShown: false }} />
      <Stack.Screen name="multipleProps" component={MultipleProps} options={{ headerShown: false }} />
      <Stack.Screen name="ReactHookExample" component={ReactHookExample} options={{ headerShown: false }} />
      <Stack.Screen name="ScrollViewChaos" component={ScrollViewChaos} options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigatorHelper" component={BottomTabNavigatorHelper} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// Define your BottomTabNavigator component
function BottomTabNavigatorHelper() {
  return (
    <BottomTabNavigator></BottomTabNavigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="GoToFirstExample"
      tabBarOptionsOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#222222",
        activeBackgroundColor: 'black',
        labelStyle: {
          fontSize: 18,
          fontWeight: 'bold'
        }
      }}
    >
      <Tab.Screen
        name="GoToFirstExample"
        component={FirstExample}
        options={{
          tabBarLabel: 'First Example',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MultipleProps"
        component={MultipleProps}
        options={{
          tabBarLabel: 'Multiple Props',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="ReactHookExample"
        component={ReactHookExample}
        options={{
          tabBarLabel: 'React Hooks',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
          // headerShown: false

        }}
      />
      <Tab.Screen
        name="ScrollViewChaos"
        component={ScrollViewChaos}
        options={{
          tabBarLabel: 'Scroll View ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="android-messages" color={color} size={size} />
          ),
          // headerShown: false
        }}
      />
      <Tab.Screen
        name="NavigationController"
        component={ButtonNavigator}
        options={{
          tabBarLabel: 'Navigation',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help" color={color} size={size} />
          ),
          // headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}