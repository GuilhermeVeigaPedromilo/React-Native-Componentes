// Rodapé
import React from 'react'; // Importa o módulo React
import { Text, View, Image, Button } from 'react-native'; // Importa os componentes do React Native
import styles from '../../styles/styles'; // Importa o arquivo de estilo

function Rodape({children}) {

  return (
    <View style={[styles.containerRodape, { backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }]}>{children}</View>
  );
}

export default Rodape; // Exporta o componente Rodape
