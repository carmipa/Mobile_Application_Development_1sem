import React from "react";
import {Text, View} from "react-native"
import { Link } from "expo-router"

export default function TelaInicial(){
    return(
        <View>
            <Text>Tela Inicial</Text>
            <Link href="./user.tsx">ir para tela do usuario</Link>
        </View>
    )
}