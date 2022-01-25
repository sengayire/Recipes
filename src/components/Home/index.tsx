import React, {useState} from 'react';
import {FlatList, Modal, SafeAreaView, Text, View} from 'react-native';

import Card from '../common/Card';
import Input from '../common/Input';
import styles from './styles';
import axios from '../../helpers/axios';
import SearchModal from '../common/SearchModal';
import SearchButton from '../common/SearchButton';

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

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
      <SearchModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        value={value}
        setValue={setValue}
      />
      <SafeAreaView>
        <Text style={styles.headerTitle}>Hello, Mark</Text>
      </SafeAreaView>
      <SearchButton
        placeholder="Search by recieps"
        onPress={() => setOpenModal(true)}
      />
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
