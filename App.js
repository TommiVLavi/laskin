import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [numb, setNumb] = useState(0);
  const [numbKaks, setNumbKaks] = useState(0);
  const [tulos, setTulos] = useState(0);

  const plus = () => {
    setTulos(numb + numbKaks)
  }

  const miinus = () => {
    setTulos(numb - numbKaks)
  }

  return (
    <View style={styles.test}>

      <View >
        <Text>Tulos: {tulos}</Text>
      </View>
      
      <View style={styles.input}>
        <TextInput style={styles.input} onChange={numb => setNumb(numb)} value={numb}/>

        <TextInput style={styles.input} onChangeText={numbKaks => setNumbKaks(numbKaks)} value={numbKaks}/>
      </View>

      <View>
        <Button title="Plussa" style={styles.button} onPress={plus}/>

        <Button title="Miinus" style={styles.button} onPress={miinus}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    width: 70,
    borderColor: 'green',
    borderWidth: 2,
  },
});