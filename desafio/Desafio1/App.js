import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaiorNumero from './components/maiorValor';
import Numero from './components/numeros';  

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maior Número entre Três Valores</Text>
      <MaiorNumero num1={15} num2={42} num3={9} />

      <Text style={styles.title}>Verificação de Número</Text>
      <Numero valor={10} />    
      <Numero valor={-5} />    
      <Numero valor={0} />     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  }
});
