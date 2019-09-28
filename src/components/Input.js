import React from 'react';
import {Input} from 'native-base';

export default CustomInput = ({
  textInput,
  Icon,
  iconName,
  iconStyle,
  iconSize,
  placeholderText,
}) => {
  return (
    <Item regular style={textInput !== null ? textInput : {}}>
      {Icon && (
        <Icon
          style={iconStyle !== null ? iconStyle : {}}
          active
          name={iconName}
          size={iconSize}
        />
      )}
      <Input placeholder={placeholderText} />
    </Item>
  );
};
