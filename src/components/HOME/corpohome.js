// Corpo
import React from "react"; // Importa o módulo React
import { Text, View } from "react-native"; // Importa os componentes do React Native
import styles from "../../styles/styles"; // Importa o arquivo de estilo

export default function ContainerHome() {
  return (
    <View style={styles.secondaryContainer}>
      <View style={styles.boxcentral}>
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Este App apresenta todos os exemplos de componentes trabalhados com
          React, utilizando Native-Stack
        </Text>
      </View>
    </View>
  );
}
