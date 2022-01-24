import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const Input = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="search by recieps" />
    </View>
  );
};

export default Input;
