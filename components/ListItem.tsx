import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

interface Props {
  id: string;
  symbol: string;
  image: string;
  name: string;
  current_price: number;
}

const ListItem = ({props}: {props: Props}) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image style={styles.image} source={{uri: props.image}} />
      </View>
      <View style={styles.cardCotentContainer}>
        <Text style={styles.textTitle}>{props.name}</Text>
        <Text>Symbol: {props.symbol}</Text>
        <Text>Price: ${props.current_price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  cardCotentContainer: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    marginEnd: 20,
  },
  textTitle: {
    fontWeight: 'bold',
  },
});

export default ListItem;
