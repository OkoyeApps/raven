import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Input from '../../components/Input';

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholderText="Search shows or artists."
          Icon={AntDesign}
          iconName="search1"
          iconSize={20}
          inputStyle={styles.textInput}
          iconStyle={{paddingLeft: 20}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
  },
});
