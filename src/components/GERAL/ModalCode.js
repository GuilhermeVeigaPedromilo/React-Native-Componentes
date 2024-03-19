import React, { useState } from "react";
import {
  View,
  Modal,
  Button,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 300,
              height: 350,
              padding: 10,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <ScrollView >{children}</ScrollView>
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
              <TextProps
                style={{ color: "white" }}
                Texto={"Voltar"}
              ></TextProps>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
