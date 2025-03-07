import { createDrawerNavigator } from '@react-navigation/drawer';  

import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Login from '../screens/Login';
import TabRoutes from './tab.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title: 'Aplicativo'}}>
            <Drawer.Screen name="Home" component={Home} 
                options={{drawerIcon: ()=><Feather name="home" size={36} color="black" />,
                tabBarLabel: 'Home'}}
            />
            <Drawer.Screen name="Login" component={Login} 
                options={{drawerLabel: ()=><Feather name="log-in" size={36} color="red" />,
                tabBarLabel: 'Login'}}
            />
        </Drawer.Navigator>
    )
    
};