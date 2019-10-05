import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../../../screens/Home/Home';
import Carousel from '../../../screens/Home/Carousel';
import SingleEvent from '../../../screens/Home/SingleEvent';
import { Dimensions, View } from 'react-native';
const { width } = Dimensions.get('window');
import { BackIcon } from '../../../components/BackButtons';

const Navigator = createStackNavigator({
    SingleEvent_Sceen: {
        screen: SingleEvent,
        navigationOptions: ({ navigation }) => {
            return {
                title: "Falz Live Concert",
                headerTransparent: true,
                headerTitleStyle: {
                    color: '#FFFFFF',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 15,
                    lineHeight: 18,
                    marginLeft: -30
                },
                headerTitleContainerStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                headerStyle: {
                    height: 40,
                    width: width,
                    backgroundColor: '#151515'
                },
                headerLeft:
                <View style={{ paddingLeft: 10 }}>
                    <BackIcon navigation={navigation} name="ios-arrow-round-back" size={40} color={'#FFFFFF'} />

                </View>

            }
        }
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
    defaultNavigationOptions: ({ navigation }) => {
        return {
            // header : null
    
        }
    }
})



export default createAppContainer(Navigator);