import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../../../screens/Home/Home';
import Carousel from '../../../screens/Home/Carousel';
import SingleEvent from '../../../screens/Home/SingleEvent';


const Navigator = createStackNavigator({
    SingleEvent_Sceen : {
        screen : SingleEvent
    },
    Carousel_Screen: {
        screen: Carousel
    },
    Home_Screen: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: null
            };
        }
    }
}, {
    defaultNavigationOptions: ({navigation}) =>  {
        return {
            header : null
        }
    }
})



export default createAppContainer(Navigator);