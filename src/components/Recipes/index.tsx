import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from '../common/Card';
import Tag from '../common/Tag';
import IngredientTable from '../common/IngredientTable';
import {useRoute} from '@react-navigation/native';

import styles from './styles';
import colors from '../../utils/colors';

const Recipes = () => {
  const {goBack} = useNavigation<NativeStackNavigationProp<any, any>>();
  const {
    params: {data},
  } = useRoute();

  const renderItem = ({item}: any) => (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <Tag name={item.display_name} selected={true} />
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.recipesContainer}>
      <SafeAreaView style={styles.header}>
        <Icon name="arrow-back" size={30} onPress={() => goBack()} />
        <Text style={styles.headerText}>Recipe Detail</Text>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <Card showContent={false} imageUrl={data.thumbnail_url} />
        </View>
        <Text style={styles.textBold}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.tags}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <IngredientTable data={data.nutrition} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Start cooking</Text>
            <Icon
              name="play"
              color={colors.white}
              style={styles.icon}
              size={15}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Recipes;
