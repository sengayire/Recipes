import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const MeasureCard = () => {
  return (
    <View style={styles.measure}>
      <View>
        <Text style={styles.boldSecondary}>345</Text>
        <Text style={styles.textGay}>kcol</Text>
      </View>
      <View>
        <Text style={styles.boldSecondary}>345</Text>
        <Text style={styles.textGay}>grams</Text>
      </View>
      <View>
        <Text style={styles.boldSecondary}>345</Text>
        <Text style={styles.textGay}>rating</Text>
      </View>
      <View>
        <Text style={styles.boldSecondary}>345</Text>
        <Text style={styles.textGay}>minutes</Text>
      </View>
    </View>
  );
};

export default MeasureCard;
