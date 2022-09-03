import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [numb, setNumb] = useState(0);
  const [numbKaks, setNumbKaks] = useState(0);
  const [tulos, setTulos] = useState(0);
  const initialFocus = useRef(null);

  const calculate = operator => {
    const [num1, num2] = [Number(numb), Number(numbKaks)];

    switch (operator) {
      case '+':
        setTulos(num1+num2)
        break;

      case '-':
        setTulos(num1-num2)
        break;
    }
    setNumb('');
    setNumbKaks('');
    initialFocus.current.focus();
  }


  return (
    <View style={styles.conatiner}>

      <View >
        <Text>Tulos: {tulos}</Text>
      </View>
      
      <View>

        <TextInput style={styles.input} 
        ref={initialFocus}
        onChangeText={text => setNumb(text)} 
        value={numb}
        keyboardType='number-pad'
        />

        <TextInput style={styles.input} 
        onChangeText={text => setNumbKaks(text)} 
        value={numbKaks}
        keyboardType='number-pad'
        />

      </View>


      <View style={styles.operators}>
        
        <View style={styles.buttons}>
          <Button title="Plussa" 
              onPress={() => calculate('+')}
            />
        </View>
          
        <View style={styles.buttons}>
          <Button title="Miinus" 
              onPress={() => calculate('-')}
            />
        </View>
        
      </View>

      <StatusBar style="auto" />

    </View>
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
  }
});