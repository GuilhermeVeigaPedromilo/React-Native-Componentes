import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import TextTtitulo from "../components/TXT/TxtComponent";
import HeaderPrincipal from "../components/GERAL/headerprincipal";
import Rodape from "../components/GERAL/rodape";
import ExemplosTouch from "../components/EXEMPLOS/ExemplosTouch";

export default function ExemploButtonTxt() {
  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={[styles.secondaryContainer, { backgroundColor: "black" }]}>
        <TextTtitulo>EXEMPLOS ABAIXO:</TextTtitulo>
        <View style={{ marginTop: 20 }}>
            <ExemplosTouch/>
        </View>
      </View>
      <Rodape/>
    </View>
  );
}
