import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const customButton = ({
  buttonStyle,
  buttonTitle,
  buttonTitleStyle,
  Icon,
  iconName,
  iconSize,
  iconStyle,
  iconColor,
  text,
  onPress,
  disabled
}) => {
  return (
    <TouchableOpacity
    disabled = {disabled}
    onPress={onPress}
      style={
        buttonStyle !== null
          ? buttonStyle
          : {width: 200, height: 200, backgroundColor: '#FFFFFF'}
      }>
      {Icon && (
        <Icon
          style={iconStyle !== null ? iconStyle : {}}
          active
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      )}
      {text && (
        <Text
          style={
            buttonTitleStyle !== null
              ? buttonTitleStyle
              : {backgroundColor: '#FFFFFF'}
          }>
          {buttonTitle !== null ? buttonTitle : 'Button'}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default customButton;
