import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();


export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} 
                options={{tabBarIcon: ()=><Feather name="home" size={36} color="black" />,
                tabBarLabel: 'Home'}}
            />
            <Tab.Screen name="Login" component={Login} 
                options={{tabBarIcon: ()=><Feather name="log-in" size={36} color="red" />,
                tabBarLabel: 'Login'}}
            />
        </Tab.Navigator>
    )
    
};