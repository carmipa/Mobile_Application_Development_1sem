import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>tela Inicial</Text>
      <Button title="ir para login" onPress={() => navigation.navigate('stackLogin')} />
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
});
