import React from 'react';
import {
  View,
  Dimensions,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {CustomCardNoText, CustomCardWithText} from '../../components/Card';
const {width, height} = Dimensions.get('window');

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';


const SingleCase = () => {

    return (
        <View style={{ backgroundColor: '#151515', flex: 1 }}>
            <SafeAreaView>
                <ScrollView >
                    <View style={{
                        width: width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: ((40 / 100) * height),
                        marginTop: 30
                    }}>
                        <CustomCardNoText
                            cardColor="white"
                            cardWidth={(40 / 100) * width}
                            cardHeight={((40 / 100) * height)}
                        />
                    </View>
                    <View style={{
                        width: width, color: '#FFFFFF',
                        padding: 20
                    }}>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 20,
                            lineHeight: 25,
                            color: '#FFFFFF'
                        }}>Falz Live Concert</Text>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: 12,
                            lineHeight: 14,
                            color: '#FFFFFF'
                        }}>NGN 5000</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: '200',
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#FFFFFF'
                            }}>Music Show</Text>
                            <View style={{
                                flexDirection: 'row', flex: 2,
                                justifyContent: 'flex-end', alignItems: 'center'
                            }}>
                                <EvilIcons name="share-google" size={25} color="#FFFFFF" style={{ marginRight: 10 }} />
                                <Ionicons name="plus" size={25} color="#FFFFFF" style={{ marginRight: 10 }} />
                                <Ionicons name="eyeo" size={25} color="#FFFFFF" style={{ marginRight: 10 }} />
                                <Text style={{ color: '#FFFFFF' }}>13k</Text>
                            </View>
                        </View>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            // fontWeight: '900',
                            fontSize: 12,
                            lineHeight: 12,
                            color: '#FFFFFF',
                            fontWeight : 'bold'
                        }}>Tomorrow - 12:00PM</Text>
                    </View>
                    <View style={{ margin: 20, marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                        <TouchableOpacity style={{
                            width: ((40 / 100) * width),
                            height: 50,
                            backgroundColor: '#C4C4C4',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            borderRadius: 1,


                        }}>
                            <FeatherIcon name="play" size={20} color="#000000" />
                            <Text style={{
                                paddingLeft: 10,
                                color: '#373737',
                                fontWeight: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: 13,
                                lineHeight: 16,

                            }}>Preview</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: ((40 / 100) * width),
                            height: 50,
                            backgroundColor: '#696868',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            borderRadius: 1,



                        }} disabled={true}>
                            <FeatherIcon name="play" size={20} color="#FFFFFF" />
                            <Text style={{
                                paddingLeft: 10,
                                color: '#FFFFFF',
                                fontWeight: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: 13,
                                lineHeight: 16,

                            }}>Play</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginTop: 50, marginBottom : 10 }}>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            lineHeight: 16,
                            color: '#FFFFFF',
                            marginHorizontal: 10,


                        }}>Related</Text>
                        <FlatList
                            renderItem={({ item }) => (
                                <View style={
                                    {}

                                }>

                                    <CustomCardWithText
                                        cardColor="white"
                                        cardTitle="KORIEDE BELLO"
                                        cardsubHeading="NGN 5000"
                                        cardText="Tomorrow - 12:00PM"
                                        cardWidth={(40 / 100) * width}
                                        cardHeight={250}
                                    />
                                </View>
                            )}
                            data={[1, 2, 3, 4]}
                            keyExtractor={(item, index) => index}
                            horizontal={true}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>)
}




const styles = StyleSheet.create({
  cardScroll: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    // height: 250,
    // width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    marginBottom: 10,
  },
});

export default SingleCase;
