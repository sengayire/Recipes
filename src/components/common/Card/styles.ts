import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 10,
    height: 250,
    padding: 20,
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
