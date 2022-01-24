import {Text, View} from 'react-native';
import React from 'react';

import styles from './styles';
interface Props {
  selected?: boolean;
}

const Tag = ({selected}: Props) => {
  return (
    <View style={(selected && styles.selected) || styles.tag}>
      <Text style={(selected && styles.selectedText) || styles.tagText}>
        Lunch
      </Text>
    </View>
  );
};

export default Tag;
