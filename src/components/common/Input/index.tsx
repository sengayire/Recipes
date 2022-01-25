import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';

interface Props {
  placeholder: string;
  onChange: any;
  value: string;
}

const Input = ({placeholder, onChange, value}: Props) => {
  return (
    <View style={styles.input}>
      <Icon name="search" size={20} color={colors.primary} />
      <TextInput
        value={value}
        style={styles.textInput}
        placeholder={placeholder}
        autoFocus={true}
        onChangeText={onChange}
        onBlur={() => console.log('helloo prin')}
      />
    </View>
  );
};

export default Input;
