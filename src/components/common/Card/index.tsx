import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = () => {
  const image = {
    uri: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/9b99644cbd9146ce8f93d5905b435e09.jpeg',
  };
  return (
    <ImageBackground source={image} imageStyle={styles.image}>
      <View style={styles.card}>
        <View style={styles.nameRate}>
          <Text style={styles.cardText}>Mary smith</Text>
          <Text style={styles.cardText}>
            <Icon name="star-outline" size={18} /> 4.8
          </Text>
        </View>
        <View>
          <Text style={styles.cardTextBold}>Toast with egg and avocado</Text>
          <Text style={styles.cardText}>
            <Icon name="time" size={18} />
            15 min
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Card;
