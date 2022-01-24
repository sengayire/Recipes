import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  ingredient: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.primary,
    paddingBottom: 20,
  },
  ingredientCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textGray: {
    color: 'gray',
    fontWeight: '300',
  },
  ingrText: {
    color: colors.primary,
    fontWeight: '500',
    paddingBottom: 15,
  },
});

export default styles;
