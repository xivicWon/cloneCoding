/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import * as Keychain from 'react-native-keychain';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [pass, setPass] = useState('');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const updateKeyChain = async (password: string) => {
    const result = await Keychain.setInternetCredentials(
      'server',
      'saft',
      password,
    );
    console.log(result);
    const credentials = await Keychain.getInternetCredentials('server');
    console.log('updateKeyChain', credentials);
    if (credentials !== false) {
      setPass(credentials.password);
      console.log(JSON.parse(credentials.password));
    }
  };

  const resetKeyChain = async () => {
    await Keychain.resetInternetCredentials('server');
    setPass('');
  };

  useEffect(() => {
    (async () => {
      const credentials = await Keychain.getInternetCredentials('server');
      if (credentials !== false) {
        setPass(credentials.password);
        await AsyncStorage.setItem('memberInfo', credentials.password);
      }
    })();

    (async () => {
      const asyncStorageData = await AsyncStorage.getItem('memberInfo');
      console.log('asyncStorageData', asyncStorageData);
    })();
  }, []);

  const sample = {
    memberId: 10,
    memberToken: 'asdfqwef3512351235edfwefqewfqwe.f-__d123123124zfasdfq',
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.buttonGroup}>
        <Pressable
          style={styles.button}
          onPress={() => updateKeyChain(JSON.stringify(sample))}>
          <Text>저장1</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => updateKeyChain('token2 is store')}>
          <Text>저장2</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={resetKeyChain}>
          <Text>초기화</Text>
        </Pressable>
      </View>
      <View style={styles.viewText}>
        <Text>{pass}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f1',
  },
  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
