import React from "react";
import { view, Text, StyleSheet } from "react-native";

function MeuComponente() {
  let numero1 = 10;
  let numero2 = 20;
  let numero3 = 30;
  let maiorNumero;

  if (numero1 > numero2 && numero1 > numero3) {
    maiorNumero = numero1;
  } else if (numero2 > numero1 && numero2 > numero3) {
    maiorNumero = numero2;
  } else {
    maiorNumero = numero3;
  }

  return (
    <View>
      <Text>O maior número é: {maiorNumero}</Text>
    </View>
  );
}

export default MaiorNumero;