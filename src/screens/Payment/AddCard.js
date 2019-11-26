import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Input from '../../components/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {MasterCardLogo} from '../../assests/Logo';

const {width, height} = Dimensions.get('window');

// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
//   function handleChange(e) {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChangeText: handleChange,
//   };
// };

const AddCard = () => {
  const [cardNo, setCardNo] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardExpiryDate, setCardExpiryDate] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
      <View>
        <Text style={styles.headerText}>Add your card details</Text>
        <LinearGradient
          style={{
            width: (90 / 100) * width,
            height: (30 / 100) * height,
            alignSelf: 'center',
            borderRadius: 10,
            margin: 10,
          }}
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={[
            '#9E005D',
            '#CF113A',
            '#ED1C24',
            '#ED1C33',
            '#ED1D47',
            '#ED1D61',
            '#ED1E79',
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <MasterCardLogo />
            <Text style={styles.CardPriceTag}>NGN5000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
              top: (1 / 100) * height,
            }}>
            <View>
              <Text style={styles.cardDetails}>Card number</Text>
              <Text style={styles.cardHolder}>{cardNo.slice(0, 4) + " " + cardNo.slice(4, 8) + " " + cardNo.slice(8, 12) + " " + cardNo.slice(12, 16)}</Text>
            </View>
            <View>
              <Text style={styles.cardDetails}>CVV</Text>
              <Text style={styles.cardHolder}>{cardCvv}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
              top: (4 / 100) * height,
            }}>
            <View>
              <Text style={styles.cardDetails}>Card holder’s name</Text>
              <Text style={styles.cardHolder}>
                {cardHolderName.toLocaleUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.cardDetails}>Date</Text>
              <Text style={styles.cardHolder}>
                {cardExpiryDate.slice(0, 2) + '/' + cardExpiryDate.slice(2)}
              </Text>
            </View>
          </View>
          <View></View>
        </LinearGradient>

        <View style={{alignItems: 'center', margin: 10}}>
          <Input
            onChangeText={value => {
              setCardNo(value);
            }}
            secureTextEntry={true}
            maxLength={16}
            keyboardType="number-pad"
            placeholderText="XXXX XXXX XXXX XXXX"
            Icon={MaterialIcon}
            iconColor="#FFFFFF"
            inputStyle={{
              ...styles.textInput1,
              width: (90 / 100) * width,
              justifyContent: 'center',
            }}
            iconStyle={{paddingLeft: 20}}
          />
          <Input
            onChangeText={value => setCardHolderName(value)}
            placeholderText="Card holder’s name"
            Icon={MaterialIcon}
            iconColor="#FFFFFF"
            inputStyle={{
              ...styles.textInput1,
              width: (90 / 100) * width,
              justifyContent: 'center',
            }}
            iconStyle={{paddingLeft: 20}}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Input
              onChangeText={value => setCardExpiryDate(value)}
              keyboardType="number-pad"
              maxLength={4}
              placeholderText="MM/YY"
              Icon={MaterialIcon}
              iconColor="#FFFFFF"
              inputStyle={{
                ...styles.textInput2,
                width: (45 / 100) * width,
              }}
              iconStyle={{paddingLeft: 20}}
            />
            <Input
              onChangeText={value => setCardCvv(value)}
              keyboardType="number-pad"
              secureTextEntry={true}
              maxLength={3}
              placeholderText="CVV"
              iconColor="#FFFFFF"
              inputStyle={{
                ...styles.textInput2,
                width: (45 / 100) * width,
              }}
              iconStyle={{paddingLeft: 20}}
            />
          </View>
          <LinearGradient
            style={{
              width: (90 / 100) * width,
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 4,
              margin: 10,
              alignItems: 'center',
            }}
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            colors={[
              '#9E005D',
              '#CF113A',
              '#ED1C24',
              '#ED1C33',
              '#ED1D47',
              '#ED1D61',
              '#ED1E79',
            ]}>
            <TouchableOpacity
              style={{
                width: (40 / 100) * width,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontWeight: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 13,
                  lineHeight: 16,
                }}>
                Pay
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcon name="lock" color="#FFFFFF" size={30} />
            <Text style={{color: '#FFFFFF'}}>
              Secured by <Text style={styles.cardHolder}>paystack</Text>
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  textInput1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 15,
  },
  textInput2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 15,
  },
  headerText: {
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 16,
    color: '#FFFFFF',
    margin: 15,
  },
  CardPriceTag: {
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  cardDetails: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#FFFFFF',
  },
  cardHolder: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginVertical: 10,
  },
});

export default AddCard;
