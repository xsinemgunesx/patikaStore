import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 3,
    margin: 10, //öğeler arasında boşluk için
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,

    borderRadius: 10,
    // alignItems: 'center',
  },
  outOfStock: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inner_container: {},
  image: {
    flex: 1,
    resizeMode: 'stretch',
    margin: 8,
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width / 4,
    borderRadius: 10,
    width: 150,
  },
  price: {
    color: '#696969',
  },
  title: {
    fontWeight: 'bold',
  },
});
