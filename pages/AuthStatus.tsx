import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AppMachineContext} from './AuthProvider';

const AuthChild = () => {
  const service = useContext(AppMachineContext);
  console.log(service);
  return (
    <View style={styles.displaySeciton}>
      <Text>Context</Text>
    </View>
  );
};

export default AuthChild;

const styles = StyleSheet.create({
  displaySeciton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
