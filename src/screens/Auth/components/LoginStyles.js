import {StyleSheet, Dimensions} from 'react-native';
const  {width, height}  = Dimensions.get('window');

const styles = StyleSheet.create({
    keyboard: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    logo: {
      marginTop: (10 / 100) * height,
      alignItems: 'center',
      marginBottom: 20,
    },
    logoText: {
      fontFamily: 'Lato',
      fontSize: 36,
      fontStyle: 'normal',
      color: '#FFFFFF',
      fontWeight: '900',
    },
    logoText2: {
      fontFamily: 'Roboto',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: 18,
      color: '#FFFFFF',
      marginTop: 10,
    },
    forgotText: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 14,
      color: '#FFFFFF',
      textAlign: 'right',
    },
    loginButton: {
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
      justifyContent: 'center',
      height: 50,
      marginTop: 20,
    },
    loginButtonText: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 14,
      color: '#ED1C24',
    },
    OrText: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'normal',
      color: '#FFFFFF',
      marginTop: 20,
    },
    loginWithView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 25,
      height: 100,
    },
    loginWith: {
      width: (35 / 100) * width,
      backgroundColor: 'transparent',
      borderRadius: 4,
      borderColor: '#FFFFFF',
      borderWidth: 1,
      justifyContent: 'center',
    },
    textInput: {
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
      width: (90 / 100) * width,
      marginBottom: 10,
    },
  });

  export default styles;
  