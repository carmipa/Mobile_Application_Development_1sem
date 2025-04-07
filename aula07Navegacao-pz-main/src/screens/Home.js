import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <Button title='IR P/ LOGIN' onPress={() => navigation.navigate("stackLogin", { nome: "Fernando" })} />
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