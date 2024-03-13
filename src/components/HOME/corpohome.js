//Corpo ------

import { Text, View, ImageBackground, Button } from 'react-native';
import styles from '../../styles/styles'; // Importando styles

export default function ContainerHome() {
  return (
        <View style={styles.secondaryContainer}>
          <View style={styles.boxcentral} >
          <Text style={{fontSize: 20, color: 'white', textAlign: 'center',}}>Este App apresenta todos os exemplos de componentes trabalhados com React, utilizando Native-Stack</Text>
    </View>
    </View>
  );
}


