import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  View, Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Logo} from '../../assests/Logo';

const {width, height} = Dimensions.get('window');

export default class Login extends React.PureComponent {
  render() {
    return (<ImageBackground
          source={require('../../assests/background.png')}
          style={{width: width, height: height}}>
          <LinearGradient
            style={{flex: 1}}
            colors={[
              'rgba(158, 0, 93, 0.6)',
              'rgba(207, 17, 58, 0.6)',
              'rgba(237, 28, 36, 0.6)',
              'rgba(237, 28, 40, 0.6)',
              'rgba(237, 28, 51, 0.6)',
              'rgba(237, 29, 71, 0.6)',
              'rgba(237, 29, 97, 0.6)',
              'rgba(237, 30, 121, 0.6)',
            ]}>
                <View style ={{justifyContent : 'center', alignItems : 'center'}}>
                    <View style={{paddingTop : ((30/100)*height)}}>
                        <Logo />
                    </View>
                    <Text style={{fontFamily : 'Roboto', fontStyle : 'normal', fontWeight : 'bold', fontSize : 22.5, color : '#FFFFFF', paddingTop  : ((30/100)*height)}}>
                         Welcome 
                    </Text>
                </View>
          </LinearGradient>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  
});
