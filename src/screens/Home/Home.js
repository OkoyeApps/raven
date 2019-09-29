import React from "react";
import {View, ImageBackground, StyleSheet} from "react-native";
import {Logo, LogoRed} from "../../assests/Logo";

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{backgroundColor: "#C4C4C4", width: "100%", height: "7%"}}>
                    <Logo/>
                </View>
                <ImageBackground source={require("../../assests/2baba.png")} style={{width: "100%", height: "60%"}}>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#2B2D42"
    }
})