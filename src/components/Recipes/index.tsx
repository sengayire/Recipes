import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Card from '../common/Card';
import IngredientTable from '../common/IngredientTable';
import Tag from '../common/Tag';
import styles from './styles';

const Recipes = () => {
  return (
    <View style={styles.recipesContainer}>
      <View>
        <Card />
      </View>
      <Text>Toast with egg and avocado</Text>
      <View style={styles.measure}>
        <View>
          <Text>345</Text>
          <Text style={styles.textGay}>kcol</Text>
        </View>
        <View>
          <Text>345</Text>
          <Text style={styles.textGay}>kcol</Text>
        </View>
        <View>
          <Text>345</Text>
          <Text style={styles.textGay}>kcol</Text>
        </View>
        <View>
          <Text>345</Text>
          <Text style={styles.textGay}>kcol</Text>
        </View>
        <View>
          <Text>345</Text>
          <Text style={styles.textGay}>kcol</Text>
        </View>
      </View>
      <Tag />
      <IngredientTable />
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Start cooking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recipes;
