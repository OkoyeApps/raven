import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Input from '../../components/Input';
import Button from "../../components/Button";
//import {Logo, LogoRed} from '../../assests/Logo';
const {width, height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


  export default class Settings extends React.PureComponent{
      render(){
          return(
            <View style={styles.container}>
              <Text style={styles.headerText}>How Would You Like To Be Helped</Text>
              <Text style={styles.emailStyle}>b.Text@gmail.com</Text>
            <View style={styles.inputView}>
            <Input
                    placeholderText="Email"
                    Icon={MaterialIcon}
                    iconName="email-outline"
                    iconSize={20}
                    inputStyle={styles.textInput2}
                    iconStyle={{paddingLeft: 20}}
                    placeholderColor="white"
                  />
                  <Input
                    placeholderText="Password"
                    placeholderColor='white'
                    Icon={MaterialIcon}
                    iconName="lock"
                    iconSize={20}
                    inputStyle={styles.textInput2}
                    iconStyle={{paddingLeft: 20}}
                  />
                  <TextInput />
                  <Button />
            </View>
            </View>
          )
      }
  }
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    width: '100%',
    height: '7%',
    alignContent:'space-around',
    flex:1
  },
  inputView:{
    justifyContent:'space-between',
    alignItems:'center',
  },
  textInput2: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 10,
    marginBottom:15
  },
  textInput: {
    backgroundColor: 'black',
    borderRadius: 4,
    marginTop: 10,
  },
  paymentStyle:{
    color:'white',
    fontWeight:'300',
    textAlign:'left',
    fontSize:15,
    
  },
  touchableView:{
    marginTop:15,
    backgroundColor:'#1C1B1B',
    padding:10
  },
  headerText:{
    fontWeight:'700',
    margin:30,
    fontSize:20,
    color:'white',
    textAlign:'center'

  },
  emailStyle:{
    color:'white',
    fontSize:12,
    textAlign:'left'
  }
}) 