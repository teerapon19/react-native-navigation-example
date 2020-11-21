import React from 'react';
import {NavigationHelpers} from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  navigation: NavigationHelpers<any, any>;
}

const DetailScreen = ({navigation}: Props) => {
  const onPress = () => {
    navigation.navigate('AboutScreen');
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <Text>DetailScreen</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Go to About Screen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});

export default DetailScreen;
