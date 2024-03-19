import React, { useState } from "react";
import { View, Modal, Button, Text, TouchableOpacity } from "react-native";
import TextProps from "../TXT/TxtProps";

export default function ModalCode({ children }) {
  const [visivel, setVisivel] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setVisivel(true);
        }}
        style={{
          padding: 10,
          backgroundColor: "red",
          alignItems: "center",
          width: 150,
          borderRadius: 20,
        }}
      >
        <TextProps
          style={{ color: "white" }}
          Texto={"Veja codificação"}
        ></TextProps>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={visivel}>
        <View style={{ alignItems: "center", marginTop: 150 }}>
          {children}
          <TouchableOpacity
            onPress={() => {
              setVisivel(false);
            }}
            style={{
              padding: 10,
              backgroundColor: "red",
              alignItems: "center",
              width: 150,
              borderRadius: 20,
            }}
          >
            <TextProps style={{ color: "white" }} Texto={"Voltar"}></TextProps>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
