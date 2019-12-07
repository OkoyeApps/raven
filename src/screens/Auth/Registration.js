import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,

} from 'react-native';
import { Container, Content, Form, CheckBox, Toast, Spinner } from 'native-base';
import { Logo } from '../../assests/Logo';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
import FeatherIcon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonWithSpinner from '../../components/ButtonWithSpinner';
import styles from './components/RegisterStyle';
import { connect } from 'react-redux';
import { RegisterUser, OauthRegister } from '../../store/actions/AuthActions';
import { ShowToast } from '../UtilComponent';

const Registration = (props) => {
  var [details, setDetails] = useState({ email: "", password: "", confirmpassword: "" });
  var [authenticating, setAuthenticating] = useState(false);
  var [oauthAuthenticating, setOauthAuthenticating] = useState(false);
  var [agree, setAgree] = useState(false);

  const register = () => {
    if ((details.password === details.confirmpassword) && (details.email !== '' && details.email !== null)) {
      props.RegisterUser(details).then(res => {
        if (res.success) {
          props.navigation.navigate("BottomNavigator");
          setAuthenticating(false);
        } else {
          alert(res.message);
          setAuthenticating(false);
        }
      }).catch(err => { setAuthenticating(false); ShowToast(err) })
    }else{
    ShowToast("All fields is required")
    }
  }

  const setValue = (name, value) => {
    setDetails({ ...details, [name]: value });
  }

  const agreeSet = (e) => {
    setAgree(!agree)
  }
  const resgisterWithOauth = (provider) => {
    setOauthAuthenticating(true);
    props.OauthRegister(provider).then(res => {
      if (res.success) {
        props.navigation.navigate("BottomNavigator");
        setOauthAuthenticating(false);
      } else {
        alert(res.message);
        setOauthAuthenticating(false);
      }
    }).catch(err => { setOauthAuthenticating(false); ShowToast(err) })
  }




  return (
    <Container style={{ flex: 1, margin: 0, padding: 0 }}>
      <Content>


        {/* <KeyboardAvoidingView
        style={styles.keyboard}
        behavior="padding"
        enabled
        keyboardVerticalOffset={-height}> */}
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
              oauthAuthenticating ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Spinner size={100} color="#FFFFFF" />
                  <Text style={{ fontStyle: 'normal', fontFamily: 'Roboto', fontSize: 20, color: '#FFFFFF', marginTop: 50 }}>Authenticating, please wait</Text>
                </View>
                :
                <View style={styles.container}>
                  <View style={styles.logo}>
                    <View style={{ marginBottom: ((0.2 / 100) * height) }}>
                      <Logo />
                    </View>
                    {
                      height > 700 &&
                      <Text style={styles.logoText}>Sign Up</Text>
                    }
                    <Text style={styles.logoText2}>Live shows at your comfort</Text>
                  </View>
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
                        onChangeText={(e) => setValue("email", e)}
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
                      <Input
                        placeholderText="Confirm Password"
                        Icon={FeatherIcon}
                        iconName="lock"
                        iconSize={20}
                        inputStyle={styles.textInput}
                        iconStyle={{ paddingLeft: 20 }}
                        onChangeText={(e) => setValue("confirmpassword", e)}
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
                        <CheckBox color={'#FFFFFF'} style={{ borderRadius: 3 }} checked={agree} onPress={agreeSet} />
                      </View>
                      <View style={{ paddingLeft: 30 }}>
                        <Text
                          style={{
                            fontStyle: 'normal',
                            fontSize: 14,
                            color: '#FFFFFF',
                          }}>
                          By signing up you agree to the{' '}
                          <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
                            Terms of service and Privacy policy
                      </Text>
                        </Text>
                      </View>
                    </View>

                    {
                      authenticating ? <ButtonWithSpinner buttonStyle={styles.RegistrationButton} />
                        :
                        <Button
                          onPress={register}
                          buttonStyle={styles.RegistrationButton}
                          buttonTitleStyle={styles.RegistrationButtonText}
                          buttonTitle="Sign Up"
                          text
                          disabled={agree ? false : true}
                        />
                    }
                    <Text style={styles.OrText}>OR</Text>
                  </Form>

                  <View style={styles.RegistrationWithView}>
                    <Button
                      buttonStyle={styles.RegistrationWith}
                      Icon={FontAwesome}
                      iconName="facebook"
                      iconSize={20}
                      iconColor={'#FFFFFF'}
                      iconStyle={{ textAlign: 'center' }}
                      onPress={() => resgisterWithOauth("facebook")}
                    />
                    <Button
                      buttonStyle={styles.RegistrationWith}
                      Icon={FontAwesome}
                      iconName="google"
                      iconSize={20}
                      iconColor={'#FFFFFF'}
                      iconStyle={{ textAlign: 'center' }}
                    />
                  </View>
                  <TouchableOpacity onPress={() => { props.navigation.navigate("Login") }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 14,
                        color: '#FFFFFF',
                        textAlign: 'center',
                      }}>
                      Already a member? Login
              </Text>
                  </TouchableOpacity>
                </View>
            }
          </LinearGradient>
        </ImageBackground>
      </Content>
    </Container>
  );
}


export default connect(null, { RegisterUser, OauthRegister })(Registration);

