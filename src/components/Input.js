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
      <Input placeholder={placeholderText} />
    </Item>
  );
};

export default CustomInput;
