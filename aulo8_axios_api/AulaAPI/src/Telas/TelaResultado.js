import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View, ImageBackground } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { Image } from 'expo-image';
import API_KEY from '../API_KEY.env';

export default function TelaResultado({ route, navigation }) {
  const escolha = route.params.escolha;
  const link = `https://api.giphy.com/v1/${escolha}/search`;
  const [textoPesquisa, setTextoPesquisa] = useState('');
  const [dados, setDados] = useState([]);

  const solicitarDados = async (textoPesquisa) => {
    try {
      const resultado = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: textoPesquisa,
          limit: 25,
          offset: 0,
          rating: 'g',
          lang: 'pt',
        },
      });
      setDados(resultado.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <ImageBackground source={require('../../assets/BG.png')} style={styles.container}>
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Ionicons name="chevron-back" size={40} color="white" onPress={() => navigation.goBack()} />
          <TextInput
              placeholder="Digite sua pesquisa"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={textoPesquisa}
              onChangeText={(value) => setTextoPesquisa(value)}
          />
          <Ionicons name="search" size={40} color="white" onPress={() => solicitarDados(textoPesquisa)} />
        </SafeAreaView>

        <FlatList
            data={dados}
            renderItem={({ item }) => (
                <Image
                    style={{ width: 250, height: 250 }}
                    source={{ uri: item.images.original.url }}
                    contentFit="contain"
                />

            )}
        />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});