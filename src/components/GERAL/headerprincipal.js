// Cabeçalho
import React from "react"; // Importa o módulo React
import { View, Image, TouchableOpacity } from "react-native"; // Importa os componentes do React Native
import styles from "../../styles/styles"; // Importa o arquivo de estilo
import { useNavigation } from "@react-navigation/native"; // Importa o hook useNavigation do React Navigation
import TextTouch from "../TXT/TxtComponentTouch"; // Importa o componente TextTouch

function HeaderPrincipal() {
  const navigation = useNavigation(); // Inicializa o hook useNavigation para gerenciar a navegação

  return (
    <View style={[styles.containerHeader, { backgroundColor: "white" }]}>
      <TouchableOpacity // Define um TouchableOpacity para tornar o conteúdo clicável
        style={styles.logo} // Aplica estilos ao TouchableOpacity
        onPress={() => {
          navigation.navigate("Home"); // Navega para a tela "Home"
          console.log("Home"); // Imprime uma mensagem no console
        }}
      >
        <Image // Define uma imagem para o TouchableOpacity
          style={styles.imagelogo} // Aplica estilos à imagem
          source={require("../../assets/images/logo.png")}
        />
      </TouchableOpacity>

      <View
        style={{ backgroundColor: "black", width: 1, height: "100%" }}
      ></View>
      <View style={styles.Buttons}>
        <TouchableOpacity
          onPress={() => {
            console.log("Exemplos"); // Imprime uma mensagem no console
            navigation.navigate("Exemplos"); // Navega para a tela "Exemplos"
          }}
        >
          <TextTouch>Exemplos</TextTouch>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HeaderPrincipal; // Exporta o componente HeaderPrincipal
