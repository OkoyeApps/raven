import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const CustomCard = ({
  cardColor,
  cardWidth,
  cardHeight,
  cardTitle,
  cardsubHeading,
  cardText,
  shadowStyle,
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
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
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
      <Text style={{justifyContent: "center", textAlign: "center"}}>View</Text>
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

export default CustomCard;
