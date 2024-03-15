import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../styles/styles"; // Importando estilos
import TextTtitulo from "../components/TXT/TxtComponent"; // Importando o componente de texto para o título
import HeaderPrincipal from "../components/GERAL/headerprincipal"; // Importando o cabeçalho
import Rodape from "../components/GERAL/rodape"; // Importando o rodapé
import ExemplosTouch from "../components/EXEMPLOS/ExemplosTouch"; // Importando o componente ExemplosTouch

export default function ExemploButtonTxt() {
  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={[styles.secondaryContainer, { backgroundColor: "black" }]}>
        <TextTtitulo>EXEMPLOS ABAIXO:</TextTtitulo>
        <View style={{ marginTop: 20 }}>
          <ExemplosTouch />
        </View>
      </View>
      <Rodape />
    </View>
  );
}