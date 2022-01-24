import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  recipesContainer: {
    padding: 20,
  },
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
  btnText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default styles;
