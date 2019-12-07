import React from 'react';
import { View, Text, StyleSheet, Dimensions, PixelRatio, TouchableOpacity } from 'react-native';
import { WelcomeIcon } from '../../assests/Onboarding/Welcome'
const { width, height } = Dimensions.get('window');
import {Icon}  from '../../assests/Onboarding/Welcome2';

const Welcome2 = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: (123 / height) * 100 + "%" }}>
                <Icon />
            </View>
            <View style={{ marginTop: 50 }}>
                <Text style={{
                    fontFamily: 'Roboto', fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 28, color: '#ED1E79',
                    justifyContent: 'flex-start', alignItems: 'center', marginLeft: 50
                }}>Discover</Text>
                <View>
                    <Text style={{
                        fontFamily: 'Roboto', fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#FFFFFF', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start',
                        marginLeft: 50, marginRight: 50, marginTop: 20
                    }}>
                        Search and discover shows by all of your favourite Nigerian comedians from anywhere in the world
                </Text>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 0, padding: 20, flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
                    <Text style={{
                        fontFamily: 'Roboto', fontStyle: 'normal',
                        fontWeight: 'bold', fontSize: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#FFFFFF85',
                    }}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Welcome_Screen3')}>
                    <Text style={{
                        fontFamily: 'Roboto', fontStyle: 'normal',
                        fontWeight: 'bold', fontSize: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#FFFFFF',
                    }}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151515',
        flex: 1,
        // marginBottom : (height/123) *100
    }
})


export default Welcome2;