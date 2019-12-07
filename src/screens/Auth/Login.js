import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Container, Content, Form, Spinner } from 'native-base';
import { Logo } from '../../assests/Logo';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
import FeatherIcon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './components/LoginStyles';
import { connect } from 'react-redux';
import { Authenticate, oauthLogin } from '../../store/actions/AuthActions';
import { ShowToast } from '../UtilComponent';
import ButtonWithSpinner from '../../components/ButtonWithSpinner';

const Login = (props) => {

  var [details, setDetails] = useState({ username: "", password: "" });
  var [AuthenticatingOauth, setAuthenticatingOauth] = useState(false);
  var [authenticating, setAuthenticating] = useState(false);

  const setValue = (name, value) => {
    setDetails({ ...details, [name]: value });
  }


  const LoginUser = () => {
    if (details.username.trim() !== '' && details.password.trim() !== "") {
      setAuthenticating(true);
      props.Authenticate(details).then(res => {
        if (res.success) {
          _gotoHome();
        } else {
          setAuthenticating(false);
          alert(res.message)
        }
      }).catch(error => {
        setAuthenticating(false);
        ShowToast("Network connection error");
      })
    } else {
      setAuthenticating(false);
      ShowToast("Please provide email and password")
    }
  }

  const LoginOauth = () => {
    setAuthenticatingOauth(true);
    props.oauthLogin().then(res => {
      if (res.success) {
        _gotoHome();
      } else {
        setAuthenticatingOauth(false);
        alert(res.message)
      }
    }).catch(error => {
      setAuthenticatingOauth(false);
      ShowToast("Network connection error");
    })
  }
  const _gotoHome = () => {
    props.navigation.navigate("Home_Default")
  }
  return (

    <Container style={{ flex: 1, margin: 0, padding: 0 }}>
      <Content>
        <ImageBackground
          source={require('../../assests/background.png')}
          style={{ width: width, height: height }}>
          <LinearGradient
            style={{ flex: 1 }}
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
                {
                  AuthenticatingOauth ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner size={100} color="#FFFFFF" />
                    <Text style={{ fontStyle: 'normal', fontFamily: 'Roboto', fontSize: 20, color: '#FFFFFF', marginTop: 50 }}>Authenticating, please wait</Text>
                  </View> :
            <View style={styles.container}>
              <View style={styles.logo}>
                <View style={{ marginBottom: 30 }}>
                  <Logo />
                </View>
                <Text style={styles.logoText}>Welcome to Raven</Text>
                <Text style={styles.logoText2}>Live shows at your comfort</Text>
              </View>

                  <View>
                    <Form>
                      <View
                        style={{
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Input
                          placeholderText="Email"
                          Icon={MaterialIcon}
                          iconName="email-outline"
                          iconSize={20}
                          inputStyle={styles.textInput}
                          iconStyle={{ paddingLeft: 20 }}
                          onChangeText={(e) => setValue("username", e)}
                        />

                        <Input
                          placeholderText="Password"
                          Icon={FeatherIcon}
                          iconName="lock"
                          iconSize={20}
                          inputStyle={styles.textInput}
                          iconStyle={{ paddingLeft: 20 }}
                          onChangeText={(e) => setValue("password", e)}
                        />
                      </View>
                      <TouchableOpacity>
                        <Text style={styles.forgotText}>Forgot?</Text>
                      </TouchableOpacity>

                      {
                        authenticating ? <ButtonWithSpinner buttonStyle={styles.loginButton}
                          buttonTitleStyle={styles.loginButtonText} />
                          :
                          <Button
                            buttonStyle={styles.loginButton}
                            buttonTitleStyle={styles.loginButtonText}
                            buttonTitle="Login"
                            onPress={LoginUser}
                            text
                          />
                      }
                      <Text style={styles.OrText}>OR</Text>
                    </Form>

                    <View style={styles.loginWithView}>
                      <Button
                        buttonStyle={styles.loginWith}
                        Icon={FontAwesome}
                        iconName="facebook"
                        iconSize={20}
                        iconColor={'#FFFFFF'}
                        iconStyle={{ textAlign: 'center' }}
                        onPress={LoginOauth}
                      />
                      <Button
                        buttonStyle={styles.loginWith}
                        Icon={FontAwesome}
                        iconName="google"
                        iconSize={20}
                        iconColor={'#FFFFFF'}
                        iconStyle={{ textAlign: 'center' }}
                      />
                    </View>
                    <TouchableOpacity onPress={() => { props.navigation.navigate("Register") }}>
                      <Text
                        style={{
                          fontFamily: 'Roboto',
                          fontStyle: 'normal',
                          fontWeight: 'normal',
                          fontSize: 14,
                          color: '#FFFFFF',
                          textAlign: 'center',
                        }}>
                        Don't have an account? Sign up
              </Text>
                    </TouchableOpacity>
                  </View>
            </View>
              }
          </LinearGradient>
        </ImageBackground>
      </Content>
    </Container>
  );
}

export default connect(null, { Authenticate, oauthLogin })(Login);

