import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
interface Props {
  data: {[key: string]: string};
}
const IngredientTable = ({data}: Props) => {
  return (
    <View>
      <View style={styles.ingredient}>
        <Text style={styles.textBold}>Nutrition</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Protein</Text>
        <Text style={styles.ingrText}>{data.protein || 'N/A'}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Fat</Text>
        <Text style={styles.ingrText}>{data.fat || 'N/A'}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Calories</Text>
        <Text style={styles.ingrText}>{data.calories || 'N/A'}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Sugar</Text>
        <Text style={styles.ingrText}>{data.sugar || 'N/A'}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Carbohydrates</Text>
        <Text style={styles.ingrText}>{data.carbohydrates || 'N/A'}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Fiber</Text>
        <Text style={styles.ingrText}>{data.fiber || 'N/A'}</Text>
      </View>
    </View>
  );
};

export default IngredientTable;
