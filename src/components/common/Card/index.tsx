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
  data?: {[key: string]: string};
}
const Card = ({showContent = true, imageUrl, data}: Props) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any, any>>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const rating =
    data?.user_ratings && data?.user_ratings?.score > 0
      ? parseInt(+data?.user_ratings?.score).toFixed(2)
      : 0;

  return (
    <ImageBackground
      source={{uri: imageUrl}}
      imageStyle={styles.image}
      onLoadStart={() => setIsLoading(true)}
      onLoadEnd={() => setIsLoading(false)}
      onError={er => console.log(er)}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => data && navigate(RECIPES_SCREEN, {data: data})}>
        {!imageUrl || isLoading ? (
          <SkeletonPlaceholder>
            <View style={styles.imagePlaceholder} />
          </SkeletonPlaceholder>
        ) : (
          showContent && (
            <View style={styles.cardContent}>
              <View style={styles.nameRate}>
                <Text style={styles.cardText}>{data?.credits?.[0]?.name}</Text>
                <Text style={styles.cardText}>
                  <Icon name="star-outline" size={18} /> {rating}
                </Text>
              </View>
              <View>
                <Text style={styles.cardTextBold}>{data?.name}</Text>
                <Text style={styles.cardText}>
                  <Icon name="time" size={18} />
                  {data?.cook_time_minutes || 0}min
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
