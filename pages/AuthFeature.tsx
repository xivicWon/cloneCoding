import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {AppMachineContext} from './AuthProvider';

const AuthFeature = () => {
  const {state, send, service} = useContext(AppMachineContext);

  useEffect(() => {
    send('fetch');
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={() => send({type: 'log in Google'})}
          style={styles.button}>
          <Text style={styles.buttonText}>log in Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthFeature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displaySeciton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#a00',
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
