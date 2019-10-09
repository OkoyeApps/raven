import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import Input from '../../components/Input';
import Button from '../../components/Button';
//import {Logo, LogoRed} from '../../assests/Logo';
const {width, height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {from} from 'rxjs';

export default class Settings extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>How Would You Like To Be Helped</Text>
        <View style={{flexDirection: 'row', margin: 10, marginLeft: 35}}>
          <MaterialIcon name="email-outline" size={20} color="white" />
          <Text style={styles.emailStyle}>b.Text@gmail.com</Text>
        </View>

        <View style={styles.inputView}>
          
        <Input
            placeholderText="Name"
            Icon={MaterialIcon}
            iconName="loc"
            iconSize={20}
            iconColor={"#4F4F4F"}
            inputStyle={styles.textInput2}
            iconStyle={{paddingLeft: 20}}
            placeholderColor="white"
          />

          <Input
            placeholderText="Email"
            Icon={MaterialIcon}
            iconName="email-outline"
            iconSize={20}
            iconColor={"#4F4F4F"}
            inputStyle={styles.textInput2}
            iconStyle={{paddingLeft: 20}}
            placeholderColor="white"
          />
          
          <TextInput
            placeholder="Message"
            style={{
              backgroundColor: '#FFFFFF',
              width: (100 / 100) * width,
              height: 120,
              marginLeft: 10,
            }}
          />

          <Button
            buttonStyle={styles.sendButton}
            buttonTitleStyle={styles.sendButtonText}
            buttonTitle="Send"
            text
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '7%',
    alignContent: 'space-around',
    flex: 1,
  },
  inputView: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput2: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: 'black',
    borderRadius: 4,
    marginTop: 10,
  },
  paymentStyle: {
    color: 'white',
    fontWeight: '300',
    textAlign: 'left',
    fontSize: 15,
  },
  touchableView: {
    marginTop: 15,
    backgroundColor: '#1C1B1B',
    padding: 10,
  },
  headerText: {
    fontWeight: '700',
    margin: 30,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
 
  sendButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    justifyContent: 'center',
    width: (100 / 100) * width,
    height: 50,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  sendButtonText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#ED1C24',
  },
  emailStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 16,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
