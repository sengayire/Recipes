import {FlatList, Text, View} from 'react-native';
import React from 'react';
import Card from '../common/Card';
import Input from '../common/Input';
import styles from './styles';
import Tag from '../common/Tag';
const Home = () => {
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
      <Card />
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Hello, Mark</Text>
      <Input placeholder="Search by recieps" />
      <View style={{display: 'flex', flexDirection: 'row', paddingTop: 20}}>
        <Tag />
        <Tag selected />
        <Tag />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
