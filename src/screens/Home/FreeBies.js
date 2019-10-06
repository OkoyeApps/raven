import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
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
  render() {
    return (
      <View style={styles.container}>
        <View style={{margin: 20}}>
        <Text style={styles.textStyle}>FREEBIES</Text>
        </View>
        <ScrollView
          >
          <View style={{flexWrap: 'wrap', flexDirection: 'row', width: width, paddingLeft: 10}}>
            {DATA.map(data => {
              return (
                <Card
                  key={data.id}
                  cardColor="white"
                  cardTitle={data.name}
                  cardsubHeading={data.time}
                  cardText="121"
                  cardWidth={(30 / 100) * width}
                  cardHeight={200}
                />
              );
            })}
          </View>
        </ScrollView>
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
