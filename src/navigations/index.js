import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import Welcome from '../../root';
import authStack from "./navigators/stacks/authStack"

const AppSwitchNavigator = createSwitchNavigator({
    Auth: authStack,
    Welcome : {screen :Welcome },
    
})

export default createAppContainer(AppSwitchNavigator);