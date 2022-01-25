import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
  },
  modalContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  searchItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
    padding: 20,
  },
  result: {
    paddingLeft: 10,
  },
  close: {
    textAlign: 'right',
    paddingRight: 20,
  },
});

export default styles;
