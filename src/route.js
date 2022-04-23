import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import ListLeitos from './pages/listLeitos'
import Perfil from './pages/perfil'
import LerQrCode from './pages/lerQrCode'
import Leito from './pages/listLeitos/leito'

import { Entypo, Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function RouteStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Leito'
                component={Leito} />
        </Stack.Navigator>
    );
}

export function Route() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    paddingTop: 5,
                    paddingTop: 5,
                },
            }
            }>
            <Tab.Screen
                name="Lista de Leitos"
                component={ListLeitos}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="QRCode"
                component={LerQrCode}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="search" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}

                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}