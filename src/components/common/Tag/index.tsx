import {Text, View} from 'react-native';
import React from 'react';

import styles from './styles';

const Tag = () => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>Lunch</Text>
    </View>
  );
};

export default Tag;
