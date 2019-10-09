import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default class Notification extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.HeaderText}>Notification</Text>
        <ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require("../../assests/2baba.png")}
              style={{
                width: (40 / 100) * width,
                height: (15 / 100) * height,
                borderRadius: 5,
                margin: 10,
              }}
            />
            <View style={{flexDirection: "column",justifyContent: 'space-between'}}>
              <Text style={styles.textStyle}>
                Falz is performing now at AY live 
                alongside with Simi
              </Text>
              <Text style={styles.timeText}>1 min ago</Text>
            </View>
           
          </View>
          <View style={styles.line}></View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  HeaderText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    display: 'flex',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 15,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 10,
  },
  timeText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 11,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  line: {
    borderWidth: 0.5,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#FFFFFF',
  },
});
