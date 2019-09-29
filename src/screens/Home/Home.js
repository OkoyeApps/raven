import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import {Logo, LogoRed} from '../../assests/Logo';
const {width, height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#C4C4C4',
            width: '100%',
            height: '7%',
            alignItems: 'center',
          }}>
          <LogoRed />
        </View>
        <ScrollView>
          <View style={{height: (100 / 100) * height}}>
            <ImageBackground
              source={require('../../assests/2baba.png')}
              style={{width: '100%', height: '60%'}}></ImageBackground>
          </View>
          <View>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              A Y Live show
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontSize: 10,
                color: '#FFFFFF',
              }}>
              Music Show
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontSize: 15,
                color: '#FFFFFF',
              }}>
              NGN 5000
            </Text>
            <FontAwesome color={'#BA0000'} size={20} name="circle" /> <Text> Live- 12:00pm</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2D42',
  },
});
