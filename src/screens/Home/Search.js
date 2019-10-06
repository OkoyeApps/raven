import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';

import Input from '../../components/Input';
import {CustomCardNoText} from '../../components/Card';

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholderText="Search shows or artists."
          Icon={AntDesign}
          iconName="search1"
          iconSize={20}
          iconColor={'#373737'}
          inputStyle={{
            margin: 10,
            marginLeft: 15,
            marginTop: 20,
            borderRadius: 5,
            backgroundColor: '#EEEEEE',
          }}
          iconStyle={{paddingLeft: 20}}
        />
        <View style={{margin: 10, width: (40 / 100) * width}}>
          <TouchableOpacity>
            <CustomCardNoText
              cardColor="white"
              cardWidth={(40 / 100) * width}
              cardHeight={(40 / 100) * height}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
});
