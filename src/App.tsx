import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import store_card from './store_card.json';
import StoreCard from './components/storeCard';

function App() {
  const renderNews = ({item}) => <StoreCard card={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <TouchableOpacity>
        <TextInput style={styles.searchbar} placeholder="Ara..." />
      </TouchableOpacity>
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        data={store_card}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },

  searchbar: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 6,
  },
  header: {
    color: '#800080',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
});

export default App;
