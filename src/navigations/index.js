import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import Welcome from '../../root';
import authStack from "./navigators/stacks/authStack"
import homeStack from './navigators/stacks/homeStack';
import MenuTab from '../components/menu/bottomNavigator';


const AppSwitchNavigator = createSwitchNavigator({

    Home_Default: homeStack,
    Auth: authStack,
    Welcome: { screen: Welcome },

})

const BottomNavigator = createBottomTabNavigator({
    AppSwitchNavigator
}, {
    tabBarComponent: ({ navigation }) => <MenuTab navigation={navigation} />,
    tabBarPosition : 'bottom',tabBarOptions : {}

})

export default createAppContainer(BottomNavigator);