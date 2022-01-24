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
    paddingBottom: 10,
  },
});

export default styles;
