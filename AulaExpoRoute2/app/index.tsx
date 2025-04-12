import { View, Text} from "react-native";
import {Link} from "expo-router";

export default function Login(){
    return(
        <>
            <View>
                <Text>Login</Text>
                <Link href="/(drawer)">Entrar</Link>"
            </View>

        </>
    )
}