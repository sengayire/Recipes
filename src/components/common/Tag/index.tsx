import {Text, View} from 'react-native';
import React from 'react';

import styles from './styles';
interface Props {
  selected?: boolean;
  name?: string;
}

const Tag = ({selected, name}: Props) => {
  return (
    <View style={(selected && styles.selected) || styles.tag}>
      <Text style={(selected && styles.selectedText) || styles.tagText}>
        {name}
      </Text>
    </View>
  );
};

export default Tag;
