import React, { useState } from "react";
import { View, Modal, Button, Text, Image } from "react-native";
import styles from "../styles/styles"; // Importa os estilos do arquivo styles.js
import HeaderPrincipal from "../components/GERAL/headerprincipal"; // Importa o componente HeaderPrincipal
import Rodape from "../components/GERAL/rodape"; // Importa o componente Rodape
import TouchableOpacityProps from "../components/TouchableOpacity/TouchableOpacityProps";
import ModalCode from "../components/GERAL/ModalCode";
import TextTitulo from "../components/TXT/TxtComponent";
import TextProps from "../components/TXT/TxtProps";

export default function ExemploProps() {
  const Action = () => {
    // Alteração aqui: Adicionei o "const" para definir a função
    alert("Action");
  };
  const [visivel, setVisivel] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={[styles.secondaryContainer, { backgroundColor: "black" }]}>
        <TextTitulo>Exemplo de TouchableOpacity com Props</TextTitulo>
        <TouchableOpacityProps
          onPress={Action}
          style={{
            backgroundColor: "orange",
            padding: 5,
            color: "white",
            fontSize: 20,
          }}
        />
      </View>
      <Rodape>
        <ModalCode>
          <TextProps
            style={{ fontSize: 20 }}
            Texto={"Código deste exercício"}
          ></TextProps>
          <Image
            source={require("../assets/images/CodeExemploProps.png")}
            style={{ width: 250, height: 150 }}
          />
        </ModalCode>
      </Rodape>
    </View>
  );
}
