
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaiorNumero from './components/maiorNumero';
import Numero from './components/numeros'; // importe seu componente Numero

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Maior número</Text>
      <Text style={styles.title}>Desafio</Text>
      <MaiorNumero n1={15} n2={42} n3={9} />

      <StatusBar style="auto" />

      <Text style={styles.heading}>Tipo de número</Text>
      <Numero valor={15} />
      <Numero valor={-42} />
      <Numero valor={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
