import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListLeitos from "./pages/listLeitos";
import Perfil from "./pages/perfil";
import LerQrCode from "./pages/lerQrCode";
import newUser from "./pages/newUser";

import { Entypo, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Lista de Leitos"
        component={ListLeitos}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="QRCode"
        component={LerQrCode}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
