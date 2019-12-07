import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from '../../assests/Onboarding/Welcome3'
import { NavigationEvents } from 'react-navigation';
const { width, height } = Dimensions.get('window');


const Welcome = (props) => {
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
                }}>Enjoy</Text>
                <View>
                    <Text style={{
                        fontFamily: 'Roboto', fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#FFFFFF', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start',
                        marginLeft: 50, marginRight: 50, marginTop: 20
                    }}>
Watch all your favourite comedy shows at real time from the comfort of your home. Enjoy
                </Text>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 0, padding: 20, flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
                    <Text style={{
                        fontFamily: 'Roboto', fontStyle: 'normal',
                        fontWeight: 'bold', fontSize: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#FFFFFF',
                    }}>GET STARTED</Text>
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


export default Welcome;