import { StatusBar } from 'react-native';
import * as React from 'react';
import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './src/screens/home';
import { Login } from './src/screens/login';
import { Register } from './src/screens/register';
import { Profile } from './src/screens/profile';
import { Favorites } from './src/screens/favorites';
import { Task } from './src/screens/task';

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar />

            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register' component={Register} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='Favorites' component={Favorites} />
                    <Stack.Screen name='Task' component={Task} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}