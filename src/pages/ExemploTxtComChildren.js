import { View } from "react-native";
import styles from "../styles/styles"; // Importa os estilos do arquivo styles.js
import TextTtitulo from "../components/TXT/TxtComponent"; // Importa o componente TextTtitulo
import HeaderPrincipal from "../components/GERAL/headerprincipal"; // Importa o componente HeaderPrincipal
import Rodape from "../components/GERAL/rodape"; // Importa o componente Rodape

export default function ExemploTxt() {
  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={[styles.secondaryContainer, { backgroundColor: "black" }]}>
        <TextTtitulo>EXEMPLO DE UTILIZAÇÃO CHILDREN</TextTtitulo>
        <TextTtitulo>Utilizando fontSize: 20, color: White</TextTtitulo>
        <TextTtitulo>React-Native</TextTtitulo>
      </View>
      <Rodape />
    </View>
  );
}