import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <Text>HomeScreen</Text>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
