import React from 'react';
import {Toast} from 'native-base';


const ShowToast = (msg) => {
    Toast.show({
        text: msg,
        buttonText: 'Cancel',
        duration: 500,
    });
}


export {ShowToast}