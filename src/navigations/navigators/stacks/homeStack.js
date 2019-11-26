import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
// import Home from '../../../screens/Home/Home';
import Carousel from '../../../screens/Home/Carousel';
import SingleEvent from '../../../screens/Home/SingleEvent';
import {Dimensions, View, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
import {BackIcon} from '../../../components/BackButtons';
import Freebies from '../../../screens/Home/FreeBies';
import Search from '../../../screens/Home/Search';
import Notification from '../../../screens/Notification/Notification';
import Settings from '../../../screens/Settings/Settings';
import AddCard from '../../../screens/Payment/AddCard';

const Navigator = createStackNavigator({
  Carousel_Screen: {
    screen: Carousel,
    navigationOptions: ({navigation}) => {
      return{
        header: null
      }
    }
  },

  Search_Screen: {
    screen: Search,
    navigationOptions: ({navigation}) => {
      return {
        header: null,
      };
    },
  },
  Freebies_Screen: {
    screen: Freebies,
  },

  AddCard_Screen: {
    screen: AddCard,
    navigationOptions: ({navigation}) => {
      return {
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerStyle: styles.headerStyle,
        headerLeft: (
          <View style={{paddingLeft: 10}}>
            <BackIcon
              navigation={navigation}
              name="ios-arrow-round-back"
              size={40}
              color={'#FFFFFF'}
            />
          </View>
        ),
      };
    },
  },

  SingleEvent_Sceen: {
    screen: SingleEvent,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Falz Live Concert',
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerStyle: styles.headerStyle,
        headerLeft: (
          <View style={{paddingLeft: 10}}>
            <BackIcon
              navigation={navigation}
              name="ios-arrow-round-back"
              size={40}
              color={'#FFFFFF'}
            />
          </View>
        ),
      };
    },
  },

  Notification_Screen: {
    screen: Notification,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Notification',
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerStyle: styles.headerStyle,
        headerLeft: (
          <View style={{paddingLeft: 10}}>
            <BackIcon
              navigation={navigation}
              name="ios-arrow-round-back"
              size={40}
              color={'#FFFFFF'}
            />
          </View>
        ),
      };
    },
  },
  Settings_Screen: {
    screen: Settings,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Settings',
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerStyle: styles.headerStyle,
        headerLeft: (
          <View style={{paddingLeft: 10}}>
            <BackIcon
              navigation={navigation}
              name="ios-arrow-round-back"
              size={40}
              color={'#FFFFFF'}
            />
          </View>
        ),
      };
    },
  },
});

const styles = StyleSheet.create({
  headerTitleStyle: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    marginLeft: -30,
  },
  headerTitleContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle: {
    height: 40,
    width: width,
    backgroundColor: '#151515',
  },
});

export default createAppContainer(Navigator);
