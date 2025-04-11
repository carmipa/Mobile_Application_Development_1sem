import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function Layout(){
    return(
        <>
            <Stack>
                <Stack.Screen name="index" options={{title: "Tela Inicial"}}/>
                <Stack.Screen name="user"/>
            </Stack><Drawer>
                <Drawer.Screen name="index" options={{title: "Tela Inicial"}}/>
                <Drawer.Screen name="user"/>
            </Drawer>
        </>
    )
}