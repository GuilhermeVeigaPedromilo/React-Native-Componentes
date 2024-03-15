import { View, } from "react-native";
import styles from "../styles/styles"; // Importa os estilos do arquivo styles.js
import HeaderPrincipal from "../components/GERAL/headerprincipal"; // Importa o componente HeaderPrincipal
import Rodape from "../components/GERAL/rodape"; // Importa o componente Rodape
import TextTitulo from "../components/TXT/TxtComponent";
import TouchableOpacityProps from "../components/TouchableOpacity/TouchableOpacityProps";

export default function ExemploProps() {
    const Action = () => {
        // Alteração aqui: Adicionei o "const" para definir a função
        alert("Action");
      };
  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={[styles.secondaryContainer, { backgroundColor: "black" }]}>
        <TextTitulo>Exemplo de TouchableOpacity com Props</TextTitulo>
        <TouchableOpacityProps onPress={Action} style={{backgroundColor: 'orange', padding: 5, color: 'white', fontSize: 20}}/>
      </View>
      <Rodape />
    </View>
  );
}