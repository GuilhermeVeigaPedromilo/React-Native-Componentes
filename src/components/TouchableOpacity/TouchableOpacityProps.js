import React from "react"; // Importa o módulo React
import { TouchableOpacity } from "react-native"; // Importa o componente TouchableOpacity do React Native
import TextProps from "../TXT/TxtProps";

export default function TouchableOpacityProps({ onPress, style, }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}><TextProps Texto={"Bem vindo"} ></TextProps></TouchableOpacity> //Retorna um componente TouchableOpacity com estilo personalizado e conteúdo passado como props
  );
}
