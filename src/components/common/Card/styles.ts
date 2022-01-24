import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 250,
    padding: 20,
  },
  cardContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  nameRate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    color: 'white',
  },
  cardTextBold: {
    color: colors.white,
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 20,
  },
});

export default styles;
