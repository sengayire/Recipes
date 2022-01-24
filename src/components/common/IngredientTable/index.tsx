import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const IngredientTable = () => {
  return (
    <View>
      <View style={styles.ingredient}>
        <Text style={styles.textBold}>Ingredients</Text>
        <Text style={styles.textGray}>6 items</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Eggs</Text>
        <Text style={styles.ingrText}>3pc</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Eggs</Text>
        <Text style={styles.ingrText}>3pc</Text>
      </View>
    </View>
  );
};

export default IngredientTable;
