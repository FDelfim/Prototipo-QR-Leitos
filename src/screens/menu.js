import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListLeitos from "../pages/listLeitos";
import Perfil from "../pages/perfil";
import LerQrCode from "../pages/lerQrCode";
import ListStatus from "../pages/listLeitos/ListStatus";

import { Entypo, Feather } from "@expo/vector-icons";
import ListAlas from "../pages/listLeitos/ListAlas";
import ListConvenio from "../pages/listLeitos/ListConvenio";
import ListTipo from "../pages/listLeitos/ListTipo";

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 10,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Leitos"
        component={ListStatus}
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
