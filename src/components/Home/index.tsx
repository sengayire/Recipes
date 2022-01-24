import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import Card from '../common/Card';
import Input from '../common/Input';
import styles from './styles';
import axios from '../../helpers/axios';

const Home = () => {
  const {data} = axios({
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: '10', tags: 'under_30_minutes'},
  });

  const renderItem = data => (
    <View style={styles.cardContainer}>
      <Card
        imageUrl={data.item.thumbnail_url}
        showContent={true}
        data={data.item}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headerTitle}>Hello, Mark</Text>
      </SafeAreaView>
      <View style={styles.inputContainer}>
        <Input placeholder="Search by recieps" />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
