import React from "react"; // Importa o módulo React
import { Text } from "react-native"; // Importa o componente Text do React Native

export default function TextTouch({ children }) {
  return (
    <Text style={{ fontSize: 15 }}>{children}</Text> //Retorna um componente Text com estilo personalizado e conteúdo passado como children
  );
}
