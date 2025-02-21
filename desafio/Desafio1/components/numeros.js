import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Numero({ valor }) {

  let resultado;
  if (valor > 0) {
    resultado = "Positivo";
  } else if (valor < 0) {
    resultado = "Negativo";
  } else {
    resultado = "Zero";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Número: {valor}</Text>
      <Text style={styles.text}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e8f5e9",
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#388e3c",
  }
});

export default Numero;
