import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  measure: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  textGay: {
    color: 'gray',
  },
  boldSecondary: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;
