// Cabeçalho
import React from "react"; // Importa o módulo React
import { View, TouchableOpacity } from "react-native"; // Importa os componentes View e TouchableOpacity do React Native
import styles from "../../styles/styles"; // Importa o arquivo de estilo
import { useNavigation } from "@react-navigation/native"; // Importa o hook useNavigation do React Navigation
import TextTouch from "../TXT/TxtComponentTouch"; // Importa o componente children TextTouch

function ExemplosTouch() {
  const navigation = useNavigation(); // Inicializa o hook useNavigation para gerenciar a navegação
  return (
    <View style={styles.boxtouch}>
      <TouchableOpacity
        style={{ backgroundColor: "white", padding: 10, borderRadius: 20 }}
        onPress={() => {
          console.log("ExemploTxtComChildren"); // Imprime uma mensagem no console
          navigation.navigate("ExemploTxtComChildren"); // Navega para a tela "ExemploTxtComChildren"
        }}
      >
        <TextTouch>Ex.:Text com CHILDREN</TextTouch>
      </TouchableOpacity>
    </View>
  );
}

export default ExemplosTouch;
