import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import Welcome from '../../root';
import authStack from "./navigators/stacks/authStack"
import homeStack from './navigators/stacks/homeStack';
import SettingsStack from './navigators/stacks/settingsStack';
import HelpStack from './navigators/stacks/helpStack';

import MenuTab from '../components/menu/bottomNavigator';

const AppSwitchNavigator = createSwitchNavigator({
    Home_Default : homeStack,
    Welcome: { screen: Welcome },

})

const BottomNavigator = createBottomTabNavigator({
    AppSwitchNavigator
}, {
    tabBarComponent: (props) => <MenuTab {...props} navigation={props.navigation} />,
    tabBarPosition : 'bottom', tabBarOptions : {activeTintColor: "#BA0000", activeBackgroundColor: "#BA0000"}

})

const switchnavigator = createSwitchNavigator({
    Autth : authStack,
    BottomNavigator : BottomNavigator
});


export default createAppContainer(switchnavigator);