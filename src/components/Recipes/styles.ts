import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '80%',
    fontSize: 18,
  },
  recipesContainer: {
    padding: 20,
  },
  textGay: {
    color: 'gray',
  },
  btnText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: colors.white,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
  },
  cardContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

export default styles;
