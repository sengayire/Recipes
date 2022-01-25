import React, {useEffect, useState} from 'react';
import {Modal, Text, View, SafeAreaView, FlatList} from 'react-native';
import Input from '../Input';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import axios from 'axios';

interface Props {
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
  value: string;
  setValue: (arg: string) => void;
}

const SearchModal = ({openModal, setOpenModal, value, setValue}: Props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
        params: {prefix: value},
        headers: {
          'x-rapidapi-host': 'tasty.p.rapidapi.com',
          'x-rapidapi-key':
            '4d3780ba10msh1efaa74c3980e41p16c1b0jsn3c1c89cf0892',
        },
      } as {};
      axios.request(options).then(function (response) {
        setData(response.data);
      });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [value]);

  const renderItem = ({item}: any) => (
    <View style={styles.searchItem}>
      <Icon name="time-outline" size={18} />
      <Text style={styles.result}>{item.search_value}</Text>
    </View>
  );

  return (
    <Modal animationType="slide" visible={openModal}>
      <View style={styles.modalContainer}>
        <SafeAreaView>
          <Text style={styles.close}>
            <Icon size={20} name="close" onPress={() => setOpenModal(false)} />
          </Text>
        </SafeAreaView>
        <View style={styles.inputContainer}>
          <Input
            value={value}
            placeholder="Search by recieps"
            onChange={(e: string) => setValue(e)}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.results || []}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </Modal>
  );
};

export default SearchModal;
