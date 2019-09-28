import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Item, Icon, Label, Form, CheckBox} from 'native-base';
import {Logo} from '../../assests/Logo';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
import FeatherIcon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default class Registration extends React.PureComponent {
  render() {
    return (
      <ImageBackground
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
          <View style={styles.container}>
            <View style={styles.logo}>
              <View style={{marginBottom: 30}}>
                <Logo />
              </View>
              <Text style={styles.logoText}>Sign Up</Text>
              <Text style={styles.logoText2}>Live shows at your comfort</Text>
            </View>
            <Form style={{}}>
              <View
                style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Input
                  placeholderText="Email"
                  Icon={MaterialIcon}
                  iconName="email-outline"
                  iconSize={20}
                  inputStyle={styles.textInput}
                  iconStyle={{paddingLeft: 20}}
                />

                <Input
                  placeholderText="Password"
                  Icon={FeatherIcon}
                  iconName="lock"
                  iconSize={20}
                  inputStyle={styles.textInput}
                  iconStyle={{paddingLeft: 20}}
                />
                <Input
                  placeholderText="Confirm Password"
                  Icon={FeatherIcon}
                  iconName="lock"
                  iconSize={20}
                  inputStyle={styles.textInput}
                  iconStyle={{paddingLeft: 20}}
                />
              </View>

              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot?</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View>
                  <CheckBox color={'#FFFFFF'} style={{borderRadius: 3}} />
                </View>
                <View style={{paddingLeft: 30}}>
                  <Text
                    style={{
                      fontStyle: 'normal',
                      fontSize: 14,
                      color: '#FFFFFF',
                    }}>
                    By signing up you agree to the{' '}
                    <Text style={{fontFamily: 'Roboto', fontWeight: 'bold'}}>
                      Terms of service and Privacy policy
                    </Text>
                  </Text>
                </View>
              </View>
              <Button
                buttonStyle={styles.RegistrationButton}
                buttonTitleStyle={styles.RegistrationButtonText}
                buttonTitle="Sign Up"
                text
              />
              <Text style={styles.OrText}>OR</Text>
            </Form>

            <View style={styles.RegistrationWithView}>
              <Button
                buttonStyle={styles.RegistrationWith}
                Icon={FontAwesome}
                iconName="facebook"
                iconSize={20}
                iconColor={'#FFFFFF'}
                iconStyle={{textAlign: 'center'}}
              />
              <Button
                buttonStyle={styles.RegistrationWith}
                Icon={FontAwesome}
                iconName="google"
                iconSize={20}
                iconColor={'#FFFFFF'}
                iconStyle={{textAlign: 'center'}}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    marginTop: (10 / 100) * height,
    alignItems: 'center',
    marginBottom: 20,
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
    marginTop: 10,
  },
  forgotText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  RegistrationButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
  },
  RegistrationButtonText: {
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
  RegistrationWithView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    height: 100,
  },
  RegistrationWith: {
    width: (35 / 100) * width,
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    width: (90 / 100) * width,
    marginBottom: 10,
  },
});
