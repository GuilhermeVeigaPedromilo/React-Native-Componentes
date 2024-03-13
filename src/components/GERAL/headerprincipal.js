//Cabeçalho-------

import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,  } from 'react-native';
import styles from '../../styles/styles'; // Importa o arquivo de estilo
import { useNavigation } from '@react-navigation/native';
import TextTouch from '../TXT/TxtComponentTouch';

  function HeaderPrincipal() {
    const navigation = useNavigation();
  return (
    <View style={[styles.containerHeader, { backgroundColor: 'white',}]}>
      <TouchableOpacity
      style={styles.logo}
      onPress={() => {navigation.navigate("Home"), console.log('Home');}}>
      <Image 
      style={styles.imagelogo}
      source={require('../../assets/images/logo.png')}
      />
      </TouchableOpacity>

      <View style={{backgroundColor: 'black', width: 1, height: '100%',}}></View>
      <View style={styles.Buttons}>
      <TouchableOpacity
      onPress={() => {console.log('Exemplos'), navigation.navigate("Exemplos")}} 
      >
        <TextTouch>Exemplos</TextTouch>
      </TouchableOpacity>
      </View>

    </View>
  );
}

export default HeaderPrincipal;