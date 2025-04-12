import { View, Text  } from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function IdProduto(){
    const{idProduto, segundoNumero} = useLocalSearchParams()

    return(
        <View>
            <Text>ID PRODUTO: {idProduto} </Text>
            <Text>SEGUNDO NÚMERO: {segundoNumero} </Text>
        </View>
    )
}