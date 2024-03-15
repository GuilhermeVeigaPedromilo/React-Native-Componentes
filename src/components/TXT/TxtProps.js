import React from "react"; // Importa o módulo React
import { Text } from "react-native"; // Importa o componente Text do React Native

export default function TextProps({ style, Texto}) {
  return (
    <Text style={style}>{Texto}</Text> //Retorna um componente Text com estilo personalizado e conteúdo passado como props
  );
}
