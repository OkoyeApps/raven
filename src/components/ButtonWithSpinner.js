import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Spinner} from 'native-base';

const customButtonSpinner = ({
  buttonStyle,
  buttonTitle,
  buttonTitleStyle,
}) => {
  return (
    <TouchableOpacity
    disabled = {true}
      style={
        buttonStyle !== null
          ? buttonStyle
          : {width: 200, height: 200, backgroundColor: '#FFFFFF'}
      }>
          <Spinner color="#ED1C24" size={40} />
      {/* {text && (
        <Text
          style={
            buttonTitleStyle !== null
              ? buttonTitleStyle
              : {backgroundColor: '#FFFFFF'}
          }>
          {buttonTitle !== null ? buttonTitle : 'Button'}
        </Text>
      )} */}
    </TouchableOpacity>
  );
};

export default customButtonSpinner;
