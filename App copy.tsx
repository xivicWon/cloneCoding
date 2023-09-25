import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import Todo from './pages/Todo';
import Auth from './pages/Auth';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Todo /> */}
      <Auth />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
