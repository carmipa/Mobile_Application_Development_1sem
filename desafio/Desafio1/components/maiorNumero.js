import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MaiorNumero({ n1, n2, n3 }) {
  let maiorN;

  if (n1 > n2 && n1 > n3) {
    maiorN = n1;
  } else if (n2 > n1 && n2 > n3) {
    maiorN = n2;
  } else {
    maiorN = n3;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Os números digitados:</Text>
      <Text style={styles.text}>Número 1: {n1}</Text>
      <Text style={styles.text}>Número 2: {n2}</Text>
      <Text style={styles.text}>Número 3: {n3}</Text>
      <Text style={styles.result}>
        O maior número digitado é: {maiorN}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  result: {
    marginTop: 10,
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
  },
});

export default MaiorNumero;
