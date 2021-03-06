import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  cardContainer: {
    paddingTop: 20,
  },
  headerTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 30,
  },
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
});

export default styles;
