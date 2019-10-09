import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import Welcome from '../../root';
import authStack from "./navigators/stacks/authStack"
import homeStack from './navigators/stacks/homeStack';
import SettingsStack from './navigators/stacks/settingsStack';
import HelpStack from './navigators/stacks/helpStack';


const AppSwitchNavigator = createSwitchNavigator({
    SettingsStack,
    Home_Default : homeStack,
    Auth: authStack,
    Welcome : {screen :Welcome },
    
})

export default createAppContainer(AppSwitchNavigator);