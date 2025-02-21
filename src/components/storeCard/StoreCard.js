import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './StoreCard_style';

const StoreCard = ({card}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: card.imgURL}}></Image>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.price}>{card.price}</Text>
        {!card.inStock && <Text style={styles.outOfStock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};
export default StoreCard;
