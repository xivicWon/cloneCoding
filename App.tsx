import React from 'react';
import {SafeAreaView} from 'react-native';
// import NaverSign from './NaverSign';
import KakaoSign from './KakaoSign';

const App = () => {
  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      {/* <NaverSign /> */}
      <KakaoSign />
    </SafeAreaView>
  );
};
export default App;
