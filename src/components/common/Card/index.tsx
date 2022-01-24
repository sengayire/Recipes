import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Card = () => {
  const image = {
    uri: 'https://img.buzzfeed.com/video-transcoder-prod/output/226912/square_720/1639767463_00001.png',
  };
  return (
    <ImageBackground source={image} imageStyle={styles.image}>
      <View style={styles.card}>
        <View style={styles.nameRate}>
          <Text style={styles.cardText}>Mary smith</Text>
          <Text style={styles.cardText}>4.8</Text>
        </View>
        <View>
          <Text style={styles.cardTextBold}>Toast with egg and avocado</Text>
          <Text style={styles.cardText}>15 min</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Card;
