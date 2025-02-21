import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MaiorNumero({ num1, num2, num3 }) {

  const maior = Math.max(num1, num2, num3);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Números: {num1}, {num2}, {num3}</Text>
      <Text style={styles.text}>Maior Número: {maior}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#00796b",
  }
});

export default MaiorNumero;
