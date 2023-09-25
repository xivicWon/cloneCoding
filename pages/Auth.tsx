import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import AuthStatus from './AuthStatus';
import {AppMachineContextProvider} from './AuthProvider';
import AuthFeature from './AuthFeature';

const App = () => {
  return (
    <AppMachineContextProvider>
      <SafeAreaView style={styles.container}>
        <AuthStatus />
        <AuthFeature />
      </SafeAreaView>
    </AppMachineContextProvider>
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
