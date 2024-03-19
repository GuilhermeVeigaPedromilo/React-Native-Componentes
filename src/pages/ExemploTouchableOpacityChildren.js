import { View, Image } from "react-native";
import styles from "../styles/styles"; // Importa os estilos do arquivo styles.js
import TouchableOpacityTouch from "../components/TouchableOpacity/TouchableOpacityChildren1"; // Importa o componente TouchableOpacityTouch
import HeaderPrincipal from "../components/GERAL/headerprincipal"; // Importa o componente HeaderPrincipal
import Rodape from "../components/GERAL/rodape"; // Importa o componente Rodape
import TextTouch from "../components/TXT/TxtComponentTouch";
import TouchableOpacityTouch2 from "../components/TouchableOpacity/TouchableOpacityChildren2";
import TouchableOpacityTouch3 from "../components/TouchableOpacity/TouchableOpacityChildren3";
import TextTitulo from "../components/TXT/TxtComponent";
import TextProps from "../components/TXT/TxtProps";
import ModalCode from "../components/GERAL/ModalCode";

export default function TouchableOpacityChildren() {
  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={[styles.secondaryContainer, { backgroundColor: "black" }]}>
        <TextTitulo>Exemplo de TouchableOpacity com CHILDREN</TextTitulo>
        <TouchableOpacityTouch><TextTouch>Touch 1</TextTouch></TouchableOpacityTouch>
        <TouchableOpacityTouch2><TextTouch>Touch 2</TextTouch></TouchableOpacityTouch2>
        <TouchableOpacityTouch3><TextTouch>Touch 3</TextTouch></TouchableOpacityTouch3>
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