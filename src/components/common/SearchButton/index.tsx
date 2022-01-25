import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';

interface Props {
  placeholder: string;
  onPress: () => void;
}

const SearchButton = ({placeholder, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.input} onPress={onPress}>
      <Icon name="search" size={20} color={colors.primary} />
      <Text style={styles.textInput}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

export default SearchButton;
