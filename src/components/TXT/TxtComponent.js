import React from "react"; // Importa o módulo React
import { Text } from "react-native"; // Importa o componente Text do React Native

export default function TextTitulo({ children }) {
  return (
    <Text style={{ fontSize: 20, color: "white", textAlign: 'center' }}>{children}</Text> // Retorna um componente Text com estilo personalizado e conteúdo passado como children
  );
}
