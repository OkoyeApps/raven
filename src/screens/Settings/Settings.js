import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Input';
import {Logo, LogoRed} from '../../assests/Logo';
const {width, height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import NotificationIcon from '../../components/NotificationIcon';

const ICON_SIZE = 70;
const FONT_SIZE = 18;

const getItem = () => (
  <View style={styles.iconStyle}>
    <MaterialIcon
      iconName="email-outline"
      iconSize={20}
      iconStyle={{paddingLeft: 20}}
    />
    <Text style={styles.textStyle}>name</Text>
  </View>
);

export default class Settings extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <Input
            placeholderText="Email"
            Icon={MaterialIcon}
            iconName="email"
            iconSize={20}
            iconColor="#FFFFFF"
            inputStyle={styles.textInput2}
            iconStyle={{paddingLeft: 20}}
          />
          <Input
            placeholderText="Password"
            placeholderColor="white"
            Icon={MaterialIcon}
            iconName="lock"
            iconSize={20}
            iconColor="#FFFFFF"
            inputStyle={styles.textInput2}
            iconStyle={{paddingLeft: 20}}
          />
        </View>

        <TouchableOpacity style={styles.touchableView}>
          <View style={{flexDirection: 'row'}}>
            <Feather
              name="bell"
              size={30}
              color="#FFFFFF"
              style={{justifyContent: 'center'}}
            />
            <Text style={styles.paymentStyle}>Notification</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableView}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcon
              name="payment"
              size={30}
              color="#FFFFFF"
              style={{justifyContent: 'center'}}
            />
            <Text style={styles.paymentStyle}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableView}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="logout"
              size={30}
              color="#FFFFFF"
              style={{justifyContent: 'center'}}
            />
            <Text style={styles.paymentStyle}>Log Out</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableView}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="help-circle-outline"
              size={30}
              color="#FFFFFF"
              style={{justifyContent: 'center'}}
            />
            <Text style={styles.paymentStyle}>Help & Feedback</Text>
          </View>
        </TouchableOpacity>
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
    backgroundColor: 'black',
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
  iconContainer: {
    width: ICON_SIZE * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  textStyle: {
    fontSize: FONT_SIZE,
  },
});
