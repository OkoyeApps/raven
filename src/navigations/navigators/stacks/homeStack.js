import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from '../../../screens/Home/Home';
import Carousel from '../../../screens/Home/Carousel';
import SingleEvent from '../../../screens/Home/SingleEvent';
import Search from '../../../screens/Home/Search';
import Freebies from "../../../screens/Home/FreeBies";

const Navigator = createStackNavigator(
  {
    Freebies_Screen:{
        screen: Freebies
    },
    Search_Screen: {
        screen: Search,
      },
    SingleEvent_Sceen: {
      screen: SingleEvent,
    },
    Carousel_Screen: {
      screen: Carousel,
    },
    Home_Screen: {
      screen: Home,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        };
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: null,
      };
    },
  },
);

export default createAppContainer(Navigator);
