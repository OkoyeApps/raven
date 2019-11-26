import React from 'react';
import {Input, Item} from 'native-base';

const CustomInput = ({
  inputStyle,
  Icon,
  iconName,
  iconStyle,
  iconSize,
  iconColor,
  placeholderText,
  maxLength,
  secureTextEntry,
  keyboardType,
  onChangeText
}) => {
  return (
    <Item
      regular
      style={inputStyle !== null ? inputStyle : {backgroundColor: 'black'}}>
      {Icon && (
        <Icon
          style={iconStyle !== null ? iconStyle : {}}
          active
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      )}
      <Input
        onChangeText={onChangeText}
        placeholder={placeholderText}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </Item>
  );
};

export default CustomInput;
