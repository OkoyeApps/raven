import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { WelcomeIcon } from '../../assests/Onboarding/Welcome'
const { width, height } = Dimensions.get('window');


const Welcome = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: (123 / height) * 100 + "%" }}>
                <WelcomeIcon />
            </View>
            <View style={{ marginTop: 50 }}>
                <Text style={{
                    fontFamily: 'Roboto', fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 28, color: '#ED1E79',
                    justifyContent: 'flex-start', alignItems: 'center', marginLeft: 50
                }}>Welcome</Text>
                <View>
                    <Text style={{
                        fontFamily: 'Roboto', fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#FFFFFF', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start',
                        marginLeft: 50, marginRight: 50, marginTop: 20
                    }}>
                        Welcome to the world of all your favorite comedains in one place. What better way to have fun is there.
                </Text>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', position: 'absolute', padding: 20, bottom: 0, flexDirection: 'row', width: '100%' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
                    <Text style={{
                        fontFamily: 'Roboto', fontStyle: 'normal',
                        fontWeight: 'bold', fontSize: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#FFFFFF85',
                    }}>SKIP</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Welcome_Screen2')}>
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


export default Welcome;