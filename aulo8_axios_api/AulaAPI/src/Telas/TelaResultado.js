
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
    Image,
  View}
  from 'react-native';
import { ImageBackground} from "react-native";
import { Ionicons} from "react-native-vector-icons";
import { SafeAreaView} from "react-native-safe-area-context";
import { useState } from "react";
import axios from "axios";
import API_KEY from "../API_KEY.env"
import FastImage from 'react-native-fast-image';

export default function TelaResultado({route, navigation}) {
  console.log(route);

  const escolha = route.params.escolha;
  const link = `https://api.giphy.com/v1/${escolha}/search`;
  const[textoPesquisa, setTextoPesquisa] = useState('');
  const [dados, setDados] = useState([]);

  console.log(link);

  const solicitarDados = async (textoPesquisa) => {
    try{
      const resultado = await  axios.get(link,{
        params:{
          api_key:API_KEY,
          q: textoPesquisa,
          limit: 25,
          offset: 0,
          rating: 'g',
          lang: 'pt'
        }
      });
      console.log(resultado.data.data);
      setDados(resultado.data.data)
    }catch (err) {
        console.log(err)
    }
  }
  return (
    <ImageBackground
        source={require('../../assets/BG.png')}
        style={styles.container}
    >
      <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Ionicons
            name="chevron-back"
            size={40}
            color="white"
            onPress={() => navigation.goBack()}
        />
        <TextInput
            placeholder="Digite sua pesquisa"
            style={styles.input}
            autoCapitalize={'none'} // Não deixa as letras do teclado em maiúsculo
            autoCorrect={false} // Não corrija o texto
            value={textoPesquisa}
            onChangeText={(value) => setTextoPesquisa(value)}
        />
        <Ionicons
            name="search"
            size={40}
            color="white"
            onPress={()=>solicitarDados(textoPesquisa)}
        />
      </SafeAreaView>

      <FlatList
          data={dados}
          renderItem={({item})=>{
        return(
            <Image
              style={{width: 250, height: 250}}
              source={{uri: item.images.original.url}}
              resizeMode={FastImage.resizeMode.contain}
            />
          )
        }}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  input:{
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  }
});
