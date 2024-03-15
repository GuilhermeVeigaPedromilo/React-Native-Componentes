import React from "react"; // Importa o módulo React
import { TouchableOpacity, Image, View } from "react-native"; // Importa o componente TouchableOpacity e Image do React Native

export default function TouchableOpacityTouch3({ children }) {
  const Action = () => {
    // Alteração aqui: Adicionei o "const" para definir a função
    alert("Action");
  };
  return (
    <TouchableOpacity // Define um TouchableOpacity para tornar o conteúdo clicável
      style={{
        backgroundColor: "#04da00",
        width: 100,
        padding: 5,
        borderRadius: 20,
        flexDirection: "row",
        gap: 20,
      }} // Aplica estilos ao TouchableOpacity
      onPress={Action}
    >
      <Image // Define uma imagem para o TouchableOpacity
        style={{ width: 30, height: 40 }} // Aplica estilos à imagem
        source={require("../../assets/images/iconetel.png")}
      />
      <View style={{ marginTop: 10, marginLeft: -20 }}>{children}</View>
    </TouchableOpacity> //Retorna um componente TouchableOpacity com estilo personalizado e conteúdo passado como children
  );
}
