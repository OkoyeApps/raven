import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Input, Item, Icon, Label, Button} from 'native-base';
import {Logo} from '../../assests/Logo';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');

export default class Login extends React.PureComponent {
  render() {
    return (
      <ImageBackground
        source={require('../../assests/background.png')}
        style={{flex: 1, width: width, height: height}}>
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
          <View style={styles.container}>
            <View style={styles.logo}>
              <Logo />
              <Text style={styles.logoText}>Welcome to Raven</Text>
              <Text style={styles.logoText2}>Live shows at your comfort</Text>
            </View>
            <View style={{justifyContent: 'space-between'}}>
              <Item regular floatingLabel style={{borderRadius: 4}}>
                <Icon active name="md-mail-open" style={{color: '#FFF'}} />
                <Label style={{padding: 20}}>Email</Label>
                <Input />
              </Item>
              <Item regular floatingLabel style={{borderRadius: 4}}>
                <Icon active name="lock" color={'white'} />
                <Label style={{padding: 20}}>Password</Label>
                <Input />
              </Item>
              <Text style={styles.forgotText}>Forgot?</Text>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.OrText}>OR</Text>
            </View>
            <View
              style={styles.loginWithView}>
              <TouchableOpacity style={styles.loginWith}>
                <FontAwesome
                  name="facebook"
                  size={20}
                  color={'#FFFFFF'}
                  style={{textAlign: 'center'}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginWith}>
                <FontAwesome
                  name="google"
                  size={20}
                  color={'#FFFFFF'}
                  style={{textAlign: 'center'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    minHeight: (20 / 100) * height,
    maxHeight: (60 / 100) * height,
    justifyContent: 'space-between',
    paddingTop: (20 / 100) * height,
    paddingHorizontal: 20,
  },
  logo: {
    marginBottom: 60,
    alignItems: 'center',
  },
  logoText: {
    fontFamily: 'Lato',
    fontSize: 36,
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontWeight: '900',
  },
  logoText2: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 18,
    color: '#FFFFFF',
  },
  forgotText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
  },
  loginButtonText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#ED1C24',
  },
  OrText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFFFFF',
    marginTop: 20,
  },
  loginWithView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    height: 100,
  },
  loginWith: {
    width: (35 / 100) * width,
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    justifyContent: 'center',
  },
});
