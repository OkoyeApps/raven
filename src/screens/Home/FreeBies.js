import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList
} from 'react-native';
import {CustomCardWithText as Card} from '../../components/Card';

const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d720',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
];

export default class FreeBies extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}
  render() {
    return (
      <View style={styles.container}>
        <View style={{margin: 20}}>
          <Text style={styles.textStyle}>FREEBIES</Text>
        </View>
        <FlatList
                data={DATA}
                numColumns={3}
                renderItem={({item}) => (
                  <TouchableOpacity>
                    <Card
                      cardColor="white"
                      cardTitle={item.name}
                      cardsubHeading={item.price}
                      cardText={item.time}
                      cardWidth={(30 / 100) * width}
                      cardHeight={200}
                    />
                  </TouchableOpacity>
                )}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
    margin: 10,
  },
});
