import React from "react";
import {Text} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TelaInicial(){

    const{nome, sobreNome} = useLocalSearchParams()
    console.log(nome + " " + "sobreNome" )

    return(
        <Text>Tela Inicial</Text>
    )
}