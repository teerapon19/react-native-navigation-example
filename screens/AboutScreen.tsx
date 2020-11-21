import React from 'react';
import {NavigationHelpers} from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface Props {
  navigation: NavigationHelpers<any, any>;
}

const AboutScreen = ({navigation}: Props) => {
  const onPress = () => {
    navigation.navigate('OKNumberOneScreen');
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <Text>AboutScreen</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Go to OK! Number One! Screen</Text>
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

export default AboutScreen;
