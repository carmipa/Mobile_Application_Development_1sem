import {View, Text} from "react-native";
import {Link} from "expo-router";

export default function DrawerHome(){
    return(
        <View>
            <Text>Drawer Home</Text>
            <Link href="/(drawer)">Entrar</Link>
        </View>
    )
}