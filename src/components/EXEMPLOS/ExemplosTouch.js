//Cabeçalho-------

import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,  } from 'react-native';
import styles from '../../styles/styles'; // Importa o arquivo de estilo
import { useNavigation } from '@react-navigation/native';
import TextTouch from '../TXT/TxtComponentTouch';

  function ExemplosTouch() {
    const navigation = useNavigation();
  return (

      <View style={styles.boxtouch}>
      <TouchableOpacity
      style={{backgroundColor: 'white', padding: 10, borderRadius: 20,}}
      onPress={() => {console.log('ExemploTxtComChildren'), navigation.navigate("ExemploTxtComChildren")}} 
      >
        <TextTouch>Ex.:Text com CHILDREN</TextTouch>
      </TouchableOpacity>

    </View>
  );
}

export default ExemplosTouch;