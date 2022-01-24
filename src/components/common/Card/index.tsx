import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './styles';
import {RECIPES_SCREEN} from '../../../constants/screens';

interface Props {
  showContent?: boolean;
  imageUrl: string;
}
const Card = ({showContent = true, imageUrl}: Props) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any, any>>();
  const [isLoading, setIsLoading] = useState<boolean>();
  return (
    <ImageBackground
      source={{uri: imageUrl}}
      imageStyle={styles.image}
      onLoadStart={() => setIsLoading(true)}
      onLoadEnd={() => setIsLoading(false)}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigate(RECIPES_SCREEN)}>
        {isLoading ? (
          <SkeletonPlaceholder>
            <View style={styles.imagePlaceholder} />
          </SkeletonPlaceholder>
        ) : (
          showContent && (
            <View style={styles.cardContent}>
              <View style={styles.nameRate}>
                <Text style={styles.cardText}>Mary smith</Text>
                <Text style={styles.cardText}>
                  <Icon name="star-outline" size={18} /> 4.8
                </Text>
              </View>
              <View>
                <Text style={styles.cardTextBold}>
                  Toast with egg and avocado
                </Text>
                <Text style={styles.cardText}>
                  <Icon name="time" size={18} />
                  15 min
                </Text>
              </View>
            </View>
          )
        )}
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Card;
