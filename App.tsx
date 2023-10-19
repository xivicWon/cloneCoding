import React from 'react';
import {SafeAreaView} from 'react-native';
import NaverSign from './NaverSign';

const App = () => {
  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <NaverSign />
    </SafeAreaView>
  );
};
export default App;
