import { StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";
import TextTtitulo from "../components/TXT/TxtComponent";
import HeaderPrincipal from "../components/GERAL/headerprincipal";
import Rodape from "../components/GERAL/rodape";

export default function ExemploButtonTxt() {
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
