import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, FlatList} from 'react-native';

import ListItem from '../components/ListItem';

interface CoinContent {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
}

const HomeScreen = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc',
    )
      .then((response) => response.json())
      .then((json) => setCoinsData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={coinsData}
          keyExtractor={({id}) => `${id}`}
          renderItem={({item}: {item: CoinContent}) => (
            <ListItem props={{...item}} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
