import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native"
import { Link } from "expo-router"

export default function TelaInicial(){
    return(
        <View>
            <Text>Tela Inicial</Text>
            <Link href={{pathname:"/user", params:{nome: "Paulo", sobreNome: "André Carminati"}}} asChild>
                <TouchableOpacity>
                    <Text>Ira para tela de usuário</Text>
                </TouchableOpacity>
            </Link>

            <Link href="/produtos/20?segundoNumero=10" asChild>
                <Button title="Enviar o ID 20 e o ID 10" />
            </Link>
        </View>
    )
}