import React from 'react';
import {NavigationHelpers, StackActions} from '@react-navigation/native';
import {SafeAreaView, StatusBar, Text, StyleSheet, View} from 'react-native';

interface Props {
  navigation: NavigationHelpers<any, any>;
}

const SplashScreen = ({navigation}: Props) => {
  setTimeout(() => {
    navigation.dispatch(StackActions.replace('BottomTabNavScreenGroup'));
  }, 3000);
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.textCenter}>Splash Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default SplashScreen;
