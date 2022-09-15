import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,FlatList } from 'react-native';

export default function Calculator({ navigation }) {
    const [numb, setNumb] = useState(0);
    const [numbKaks, setNumbKaks] = useState(0);
    const [tulos, setTulos] = useState(0);
    const initialFocus = useRef(null);
    const [data, setData] = useState([]);
    
  
    const calculate = operator => {
      const [num1, num2] = [Number(numb), Number(numbKaks)];
  
      let tulos = 0;
  
      switch (operator) {
        case '+':
          tulos = num1+num2;
          setTulos(num1+num2)
          break;
  
        case '-':
          tulos = num1-num2;
          setTulos(num1-num2)
          break;
      }
  
      const text = `${num1} ${operator} ${num2} = ${tulos}`
      setData([...data, { key: text }])
      setNumb('');
      setNumbKaks('');
      initialFocus.current.focus();

      console.log(data[0])
    }
  
    return (
      <View style={styles.conatiner}>
  
        <Text>Tulos: {tulos}</Text>
        
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
  
        

        <Button
          title='Historia'
          onPress={() => navigation.navigate('Historia', { data })}
        />
  
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
    },
  
    table: {
      borderColor: 'pink',
      borderWidth: 4,
      margin: 35,
      width: 210
    }
  });