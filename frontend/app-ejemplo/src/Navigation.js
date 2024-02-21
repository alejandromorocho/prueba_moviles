import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListComponent from "./componentes/list/List";
import User from './screen/User'
import Chat from "./screen/Chat";
import Pdf from "./screen/Pdf";
import Traductor from "./screen/Traductor";
import TraductorM from "./screen/TraductorM";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Perfil de damorocho@uce.edu.ec" component={Menu} options={{
                tabBarLabel: 'HOME',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home-circle" color={color} size={size} />
                )
            }} />
            <Tab.Screen name={'list'} component={ListComponent} options={{
                tabBarLabel: 'LISTADO',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name={'format-list-bulleted'} color={color} size={size} />
                )
            }} />
            <Tab.Screen name={'nombre'} component={User} options={{
                tabBarLabel: 'NOMBRE',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name={'card-account-details-outline'} color={color} size={size} />
                )
            }} />
            <Tab.Screen name={'openIA'} component={Chat} options={{
                tabBarLabel: 'openIA',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name={'robot-excited-outline'} color={color} size={size} />
                )
            }} />
            <Tab.Screen name={'pdf'} component={Pdf} options={{
                tabBarLabel: 'PDF',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name={'file-document-outline'} color={color} size={size} />
                )
            }} />

            <Tab.Screen name={'nuevo'} component={TraductorM} options={{
                tabBarLabel: 'Nuevo',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name={'new-box'} color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default Navigation