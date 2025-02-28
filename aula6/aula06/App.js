import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nomeAluno, setNomeAluno] = useState(''); // estado do nome do aluno
  const [emailAluno, setEmailAluno] = useState(''); // estado do email do aluno
  const [monstrarDados, setMostrarDados] = useState(false); // estado para mostrar os dados do aluno

//   function renderizar(){
//     if(mostrarDados){
//       return <Text>{nomeAluno} --- {emailAluno}</Text>
//     }else{
//       return null;
//     }
//   }

  return (
    <View style={styles.container}>
      <Image 
        // source={require('./assets/fiaplogo.png')} -- imagem em pasta local
        source={{uri: 'https://i.scdn.co/image/ab6765630000ba8a9543f1ed639f9830d951f154'}} // imagem da internet pela url
        style={styles.imagem}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        maxLength={30}  // limite de caracteres aceitos no campo
        keyboardType='default' // tipo de teclado
        value={nomeAluno} // valor do campo
        onChangeText={(valor)=> setNomeAluno(valor)} // função que atualiza o valor do campo
        
      />
      <Text style={{color : 'red'}}>{nomeAluno}</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite seu e-mail'
        maxLength={30}  // limite de caracteres aceitos no campo
        keyboardType='email-address' // tipo de teclado
        value={emailAluno} // valor do campo
        onChangeText={(valor)=> setEmailAluno(valor)} // função que atualiza o valor do campor
        
      />
      <Text style={{color : 'white'}}>{emailAluno}</Text>

      <Button title='Click aqui para enviar'
        //onPress={()=>console.log({nomeAluno, emailAluno})}
        onPress={()=>setMostrarDados(true)}
      />
      {monstrarDados && <Text>{nomeAluno} - {emailAluno}</Text>}

    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10
  },
  imagem:{
    resizeMode: 'center',
    width: 300,
    height: 300
  },
  input:{
    backgroundColor: 'white',
    width: 400,
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: '#87DEEB',
    fontSize: 20
  }
});
