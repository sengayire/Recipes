import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from '../common/Card';
import Tag from '../common/Tag';
import MeasureCard from '../common/MeasureCard';
import IngredientTable from '../common/IngredientTable';

import styles from './styles';
import colors from '../../utils/colors';
const Recipes = () => {
  const {goBack} = useNavigation<NativeStackNavigationProp<any, any>>();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <Tag />
    </View>
  );
  return (
    <View style={styles.recipesContainer}>
      <SafeAreaView style={styles.header}>
        <Icon name="arrow-back" size={30} onPress={() => goBack()} />
        <Text style={styles.headerText}>Recipe Detail</Text>
      </SafeAreaView>
      <View style={styles.cardContainer}>
        <Card
          showContent={false}
          imageUrl="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/9b99644cbd9146ce8f93d5905b435e09.jpeg"
        />
      </View>
      <Text style={styles.textBold}>Toast with egg and avocado</Text>
      <MeasureCard />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <IngredientTable />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Start cooking</Text>
          <Icon name="play" color={colors.white} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recipes;
