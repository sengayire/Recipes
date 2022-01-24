import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ingredient: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
});

export default styles;
