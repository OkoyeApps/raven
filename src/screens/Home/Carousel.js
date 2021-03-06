import React, { useState, useEffect } from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Dimensions,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LogoNoText as LogoRed } from '../../assests/Logo';
import { CustomCardWithText as Card } from '../../components/Card';
import styles from './component/Styles';
import {useSelector} from 'react-redux'
import {Container, Content} from 'native-base';
var data = [
  {
    title:
      'https://d1e4pidl3fu268.cloudfront.net/1516a0ab-618a-44bc-ae32-2e2786db8d0c/whe.crop_604x454_102,0.preview.png',
  },
  {
    title:
      'http://images4.fanpop.com/image/photos/17500000/cool-backgrounds-random-17514054-1024-640.jpg',
  },
  { title: 'https://c2.staticflickr.com/6/5252/5403292396_0804de9bcf_b.jpg' },
  { title: 'https://cdns.kinguin.net/media/category/r/a/random_steam3.jpg' },
  {
    title:
      'https://wallpapertag.com/wallpaper/full/3/9/b/636812-amazing-weird-wallpapers-1920x1080.jpg',
  },
];

const DATA = [
  {
    _id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
  {
    _id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
  {
    _id: '58694a0f-3da1-471f-bd96-145571e29d720',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
  {
    _id: '58694a0f-3da1-471f-bd96-145571e29d722',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
  {
    _id: '58694a0f-3da1-471f-bd96-145571e29d721',
    name: 'KORIEDE BELLO',
    price: 'NGN 5000',
    time: 'Tomorrow - 12:00PM',
  },
];

const MyCarousel = (props) => {
  var StoreAuth = useSelector((store) => store.Auth )
  var _carousel = {};
  useEffect(() => {
  });
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ margin: 0, padding: 0 }}>
        <View>
          <ImageBackground
            source={{
              uri: item.title,
              width: width,
              height: (40 / 100) * height,
              cache: 'default',
            }}
            resizeMode="cover"
            resizeMethod="auto"
            style={styles.image}>
            {index > 0 ? (
              <FontAwesome
                style={{ paddingTop: 0, paddingLeft: 10 }}
                name="angle-left"
                color="#FFFFFF"
                size={35}
              />
            ) : (
                <FontAwesome />
              )}
            <FontAwesome
              style={{ paddingTop: 0, paddingRight: 10 }}
              name="angle-right"
              color="#FFFFFF"
              size={35}
            />
          </ImageBackground>
        </View>
        <View style={{ paddingLeft: 15, marginBottom : 20 }}>
          <Text style={{ padding: 10, color: 'black' }}>
            {'\n'}
            <Text style={styles.header}>AY Live Show</Text>
            {'\n'}
            <Text style={styles.header1}>Music Show</Text>
            {'\n'}
            <Text style={{ ...styles.header1, fontWeight: '200', fontSize: 13 }}>
              NGN 6000
            </Text>
            {'\n'}
            <Text>
              <FontAwesome name="circle" color={'#BA0000'} />
              <Text style={{ ...styles.header2, fontWeight: 'bold' }}>
                {'  '} Live - 12:00PM
              </Text>
            </Text>
          </Text>
        </View>
      </View>
    );
  }

  return (
    <Container style={styles.container}>
      {/* <View
        style={{
          backgroundColor: '#C4C4C4',
          width: width,
          height: (5 / 100) * height,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ top: '20%' }}>
          <LogoRed />
        </View>
      </View> */}
      <Content style={{flex : 1}}>
        <View style={{ maxHeight: (100 / 100) * height }}>
          <Carousel
            ref={c => {
              _carousel = c;
            }}
            data={data}
            renderItem={_renderItem}
            sliderWidth={width}
            itemWidth={width}
            style={{ margin: 0, padding: 0, flex: 1 }}
          />
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.textStyle}>My list</Text>
            <FlatList
              data={DATA}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ width: (40 / 100) * width }}
                  onPress={() => props.navigation.navigate("Search")}>
                  <Card
                    cardColor="white"
                    cardTitle={item.name}
                    cardsubHeading={item.price}
                    cardText={item.time}
                    cardWidth={(40 / 100) * width}
                    cardHeight={250}
                    onpress={() => props.navigation.navigate("SingleEvent_Sceen")}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) =>item._id }
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.textStyle}>Upcoming</Text>
            <FlatList
              data={DATA}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity style={{ width: (40 / 100) * width }}>
                  <Card
                    cardColor="white"
                    cardTitle={item.name}
                    cardsubHeading={item.price}
                    cardText={item.time}
                    cardWidth={(40 / 100) * width}
                    cardHeight={250}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) =>item._id }
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.textStyle}>Past Shows</Text>
            <FlatList
              data={DATA}
              horizontal={true}
              renderItem={({ item, index }) => (
                <TouchableOpacity key={index}>
                  <Card
                    cardColor="white"
                    cardTitle={item.name}
                    cardsubHeading={item.price}
                    cardText={item.time}
                    cardWidth={(40 / 100) * width}
                    cardHeight={250}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) =>item._id }
            />
          </View>
        </View>
      </Content>
    </Container>
  );
}




export default MyCarousel;
