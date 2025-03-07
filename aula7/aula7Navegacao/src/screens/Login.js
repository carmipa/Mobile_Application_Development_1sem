import { Button, StyleSheet, Text, View } from 'react-native';

export default function Login(props) {
  console.log(props.route.params.nome)
  console.log(props)
  return (
    <View style={styles.container}>
      <Text>Tela Login</Text>
      <Button title='IR P/ HOME' onPress={() => navigation.goBack()} />

      {console.log()}
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