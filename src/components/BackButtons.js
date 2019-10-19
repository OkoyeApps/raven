import React from 'react';
import {TouchableOpacity, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';




export const  BackIcon = ({navigation, name, size, color}) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={name} size={size} color={color} />
        </TouchableOpacity>
    )
}


 