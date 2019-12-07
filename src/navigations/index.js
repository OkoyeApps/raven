import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import Welcome from '../../root';
import authStack from "./navigators/stacks/authStack"
import homeStack from './navigators/stacks/homeStack';
import SettingsStack from './navigators/stacks/settingsStack';
import HelpStack from './navigators/stacks/helpStack';
import OnboardingStack from './navigators/stacks/onboarding';

import MenuTab from '../components/menu/BottomNavigator';

const AppSwitchNavigator = createSwitchNavigator({
    Home_Default : homeStack,
    Welcome: { screen: Welcome },
})

const BottomNavigator = createBottomTabNavigator({
    AppSwitchNavigator
}, {
    tabBarPosition : 'bottom', 
    tabBarOptions : {activeTintColor: "red", activeBackgroundColor: "#BA0000"},
    tabBarComponent: (props) => <MenuTab {...props} navigation={props.navigation} />,
})

const switchnavigator = createSwitchNavigator({
    Onboarding : OnboardingStack,
    Auth : authStack,
    BottomNavigator : BottomNavigator,
});


export default createAppContainer(switchnavigator);