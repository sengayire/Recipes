import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';

interface Props {
  placeholder?: string;
}

const Input = ({placeholder}: Props) => {
  return (
    <View style={styles.input}>
      <Icon name="search" size={20} color={colors.primary} />
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

export default Input;
