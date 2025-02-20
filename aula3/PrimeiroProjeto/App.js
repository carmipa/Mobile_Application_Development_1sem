import React from "react";

import {Text} from "react-native";

import { SafeAreaView } from "react-native";

import PrimeiroComponente from "./components/variosComponents";

import SegundoComponente from "./components/variosComponents";

import {StyleSheet} from "react-native";



function App(){
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.textoPadrao}>Hello World</Text>
      <PrimeiroComponente>primeiro</PrimeiroComponente>
      <SegundoComponente>segundo</SegundoComponente>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  textoPadrao:{
    color: "red",
    fontSize: 30
  },
  container:{
    alignItems: "center",
  }
})
export default App;