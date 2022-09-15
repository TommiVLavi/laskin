import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button ,FlatList } from 'react-native';

export default function History({ route, navigation }) {
    const { data } = route.params;
    return(
        <View style={styles.conatiner} >
            <View style={styles.table}>
  
                <FlatList
                    ListHeaderComponent={<Text>Historia:</Text>}
                    data={data}
                    renderItem={({ item }) => 
                    <Text>{item.key}</Text>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            
            <View style={styles.buttons}>
                <Button 
                    title='Takaisin'
                    onPress={() => navigation.navigate('Laskin')}
                />
            </View>
        </View>
    )
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