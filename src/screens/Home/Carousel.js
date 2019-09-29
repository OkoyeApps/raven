import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
const { width, height } = Dimensions.get('window');
import { Card, CardItem, Body } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

var data = [
    { title: "https://d1e4pidl3fu268.cloudfront.net/1516a0ab-618a-44bc-ae32-2e2786db8d0c/whe.crop_604x454_102,0.preview.png" },
    { title: "http://images4.fanpop.com/image/photos/17500000/cool-backgrounds-random-17514354-1024-640.jpg" },
    { title: "https://c2.staticflickr.com/6/5252/5403292396_0804de9bcf_b.jpg" },
    { title: "https://cdns.kinguin.net/media/category/r/a/random_steam3.jpg" },
    { title: "https://wallpapertag.com/wallpaper/full/3/9/b/636812-amazing-weird-wallpapers-1920x1080.jpg" }
]

class MyCarousel extends Component {

    _renderItem({ item, index }) {
        return (
            <View style={{ margin: 0, padding: 0 }}>
                <View>
                    <ImageBackground
                        source={{ uri: item.title, width: width, height: ((40 / 100) * height), cache: 'default', }}
                        style={styles.image}>
                        {
                            index > 0 ? <FontAwesome style={{ paddingTop: 0, paddingLeft: 10 }} name="angle-left" color="#FFFFFF" size={30} /> : <FontAwesome />
                        }
                        <FontAwesome style={{ paddingTop: 0, paddingRight: 10 }} name="angle-right" color="#FFFFFF" size={35} />
                    </ImageBackground>
                </View>
                <View>
                    <Text style={{ padding: 10, color: 'black' }}>{'\n'}
                        <Text style={styles.header}>Ay Live Show</Text>{'\n'}
                        <Text style={styles.header2}>Music Show</Text>{'\n'}
                        <Text style={{ ...styles.header2, fontWeight: "200", fontSize: 14 }}>NGN 5000</Text>{'\n'}
                        <Text ><FontAwesome name="circle" color={"#BA0000"} />
                            <Text style={{ ...styles.header2, fontWeight: "bold" }}> Live - 12:00PM</Text></Text>

                    </Text>
                </View>



            </View>
        );
    }

    render() {
        return (
            <View style={{ backgroundColor: '#2B2D42', height: height, paddingTop: 20 }}>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={data}
                    renderItem={this._renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    style={{ margin: 0, padding: 0, flex: 1 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: ((40 / 100) * height),
        resizeMode: 'cover',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    header: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 28,
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
    },
    header2: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 10,
        lineHeight: 12,
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
    },

})


export default MyCarousel;