import { View } from "react-native";
import styles from "../styles/styles"; // Importa os estilos do arquivo styles.js
import TextTitulo from "../components/TXT/TxtComponent"; // Importa o componente TextTitulo
import HeaderPrincipal from "../components/GERAL/headerprincipal"; // Importa o componente HeaderPrincipal
import Rodape from "../components/GERAL/rodape"; // Importa o componente Rodape

export default function ExemploTxt() {
  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={[styles.secondaryContainer, { backgroundColor: "black" }]}>
        <TextTitulo>EXEMPLO DE UTILIZAÇÃO CHILDREN</TextTitulo>
        <TextTitulo>Utilizando fontSize: 20, color: White</TextTitulo>
        <TextTitulo>React-Native</TextTitulo>
      </View>
      <Rodape />
    </View>
  );
}