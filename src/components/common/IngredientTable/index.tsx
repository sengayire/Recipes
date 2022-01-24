import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from './styles';
interface Props {
  data: {[key: string]: string};
}
const IngredientTable = ({data}: Props) => {
  return (
    <ScrollView>
      <View style={styles.ingredient}>
        <Text style={styles.textBold}>Nutrition</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Protein</Text>
        <Text style={styles.ingrText}>{data.protein}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Fat</Text>
        <Text style={styles.ingrText}>{data.fat}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Calories</Text>
        <Text style={styles.ingrText}>{data.calories}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Sugar</Text>
        <Text style={styles.ingrText}>{data.sugar}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Carbohydrates</Text>
        <Text style={styles.ingrText}>{data.carbohydrates}</Text>
      </View>
      <View style={styles.ingredientCard}>
        <Text style={styles.ingrText}>Fiber</Text>
        <Text style={styles.ingrText}>{data.fiber}</Text>
      </View>
    </ScrollView>
  );
};

export default IngredientTable;
