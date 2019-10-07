
import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
import {
    StyleSheet,
    View
  } from 'react-native';
const dataArray = [
  { title: "Notification", content: "Lorem ipsum dolor sit amet" },

];
export default class NotificationIcon extends Component {
  render() {
    return (
          <View style={styles.Icons}>
          <Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "white" ,  }}
            expandedIconStyle={{ color: "white" }}
            headerStyle={{ backgroundColor: "#1C1B1B" , borderColor:'white' , color:'white'}}
            contentStyle={{ backgroundColor: "black"  , color:'white'}}
          />
          </View>    
     
    );
  }
}

const styles = StyleSheet.create({
    Icon:{
        backgroundColor:'black',
        color:'white'
    }
})