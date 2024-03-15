import React from "react"; // Importa o módulo React
import { TouchableOpacity } from "react-native"; // Importa o componente TouchableOpacity do React Native

export default function TouchableOpacityTouch({ children }) {
  const Action = () => {
    // Alteração aqui: Adicionei o "const" para definir a função
    alert("Action");
  };
  return (
    <TouchableOpacity
      style={{ padding: 20, backgroundColor: "white", borderRadius: 50 }}
      onPress={Action}
    >
      {children}
    </TouchableOpacity> //Retorna um componente TouchableOpacity com estilo personalizado e conteúdo passado como children
  );
}
