import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const { width } = Dimensions.get('window');


const Menu = ({ navigation }) => {
    return (
        <View style={{ width: width, margin: 0, paddingVertical: 5, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("Carousel_Screen")}>
                <SimpleLineIcons name={"home"} size={25} />
                <Text>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("Search_Screen")}>
                <EvilIcons name={"search"} size={25} />
                <Text>SEARCH</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("Freebies_Screen")}>
                <Fontisto name={"play-list"} size={20} />
                <Text>FREEBIES</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("Notification_Screen")}>
                <EvilIcons name={"menu"} size={25} />
                <Text>MORE</Text>

            </TouchableOpacity>
        </View>)

}


export default Menu;