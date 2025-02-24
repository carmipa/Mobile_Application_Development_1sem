import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState([]);

  // Adiciona o número digitado à lista, se for válido
  const addNumber = () => {
    const num = parseFloat(number);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
      setNumber('');
    }
  };

  // Retorna o maior número da lista, se existir algum
  const getMax = () => {
    if (numbers.length === 0) return null;
    return Math.max(...numbers);
  };

  // Verifica se o número é inteiro ou decimal
  const getType = (num) => {
    return Number.isInteger(num) ? 'Inteiro' : 'Decimal';
  };

  const maxNumber = getMax();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Digite um número:</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={setNumber}
        placeholder="Ex: 10.5 ou 8"
        keyboardType="numeric"
      />
      <Button title="Adicionar Número" onPress={addNumber} />

      <View style={styles.resultContainer}>
        <Text style={styles.title}>Números Digitados:</Text>
        <ScrollView style={styles.scroll}>
          {numbers.map((num, index) => (
            <Text key={index} style={styles.numberText}>
              {num} - {getType(num)}
            </Text>
          ))}
        </ScrollView>
      </View>

      {maxNumber !== null && (
        <View style={styles.maxContainer}>
          <Text style={styles.maxTitle}>Maior número:</Text>
          <Text style={styles.maxText}>
            {maxNumber} ({getType(maxNumber)})
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scroll: {
    maxHeight: 150,
  },
  numberText: {
    fontSize: 16,
    marginBottom: 5,
  },
  maxContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  maxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  maxText: {
    fontSize: 18,
  },
});