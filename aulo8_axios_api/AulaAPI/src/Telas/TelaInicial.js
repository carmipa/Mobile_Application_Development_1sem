import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function TelaInicial({ navigation }) {
  console.log(navigation);
  
  return (
    <ImageBackground
      source={require('../../assets/HomePage.png')}
      style={styles.container}
    >
      <Text style={styles.textoPrincipal}>Pesquisar por...</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={styles.btn} 
          onPress={() => navigation.navigate('TelaResultado', {escolha:'gifs'})}
        >
          <Text style={styles.textBtn}>Gifs</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btn}
          onPress={() => navigation.navigate('TelaResultado', {escolha:'stickers'})}
        > 
          <Text style={styles.textBtn}>Gifs</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrincipal: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  btn:{
    width: 100,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  textBtn:{
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
