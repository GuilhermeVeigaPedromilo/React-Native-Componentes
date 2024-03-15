import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HeaderPrincipal from "../components/GERAL/headerprincipal"; // Importa o componente HeaderPrincipal
import styles from "../styles/styles"; // Importa os estilos do arquivo styles.js
import Rodape from "../components/GERAL/rodape"; // Importa o componente Rodape
import ContainerHome from "../components/HOME/corpohome"; // Importa o componente ContainerHome

export default function ExemploButtonTxt() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/fundohome.jpg")}
        style={styles.body}
      >
        <HeaderPrincipal />
        <ContainerHome />
        <Rodape />
      </ImageBackground>
    </View>
  );
}
