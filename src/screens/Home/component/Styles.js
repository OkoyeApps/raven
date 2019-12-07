import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B2D42',
        // backgroundColor : 'red',
        // paddingBottom : 50
    },
    image: {
        width: width,
        height: (50 / 100) * height,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

    header: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 40,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
    },

    header1: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 18,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
    },
    header2: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 13,
        lineHeight: 18,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',

    },
    textStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#FFFFFF',
        margin: 10,
    },
});

export default styles;