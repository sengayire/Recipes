import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  tag: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    width: 100,
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
  },
  tagText: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  selected: {
    backgroundColor: colors.secondaryLight,

    display: 'flex',
    alignItems: 'center',
    width: 100,
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
  },
  selectedText: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default styles;
