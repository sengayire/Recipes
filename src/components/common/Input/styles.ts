import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.lightGrey,
    height: 40,
    padding: 10,
    borderRadius: 10,
    color: colors.primary,
  },
  textInput: {
    paddingLeft: 10,
    fontWeight: '300',
  },
});

export default styles;
