import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
    height: 40,
    borderRadius: 10,
  },
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
    color: 'white',
    fontWeight: 'bold',
  },
  image: {borderRadius: 20},
});

export default styles;
