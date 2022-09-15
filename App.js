import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput ,FlatList } from 'react-native';

import Calc from './Calculator'
import Hist from './History'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Laskin' component={Calc} />
        <Stack.Screen name='Historia' component={Hist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    width: 220,
    borderColor: 'green',
    borderWidth: 2,
    padding: 20,
    margin: 15,
  },

  operators: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  buttons: {
    width: '20%',
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
  },

  table: {
    borderColor: 'pink',
    borderWidth: 4,
    margin: 35,
    width: 210
  }
});