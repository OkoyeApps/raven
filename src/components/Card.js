import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const CustomCardWithText = ({
  cardColor,
  cardWidth,
  cardHeight,
  cardTitle,
  cardsubHeading,
  cardText,
}) => {
  return (
    <View
      style={{
        width: cardWidth,
        height: cardHeight,
        backgroundColor: cardColor,
        borderRadius: 4,
        margin: 5,
        marginBottom: 0,
      }}>
      <Image
        source={require('../assests/2baba.png')}
        style={{
          width: '100%',
          height: '70%',
          borderTopRightRadius: 4,
          borderTopLeftRadius: 4,
          resizeMode: 'cover',
        }}
      />
      <View style={{flex: 1, paddingLeft: 10, justifyContent: 'center'}}>
        <Text style={styles.cardTitleText}>{cardTitle}</Text>
        <Text style={styles.cardsubHeadingText}>{cardsubHeading}</Text>
        <Text style={styles.cardText}>{cardText}</Text>
      </View>
    </View>
  );
};



const CustomCardNoText = ({
  cardColor,
  cardWidth,
  cardHeight,
}) => {
  return (
    <View
      style={{
        width: cardWidth,
        height: cardHeight,
        backgroundColor: cardColor,
        borderRadius: 4,
        margin: 5,
        marginBottom: 0,
      }}>
      <Image
        source={require('../assests/falz4.png')}
        style={{
          width: '100%',
          height: '100%',
          borderTopRightRadius: 4,
          borderTopLeftRadius: 4,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};







const styles = StyleSheet.create({
  cardTitleText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    alignItems: 'center',
    color: '#282929',
  },
  cardsubHeadingText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    color: '#282929',
  },
  cardText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    color: '#282929',
  },
});

export  {CustomCardWithText,CustomCardNoText};
