import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';

import NetInfo from '@react-native-community/netinfo';
const NetworkDisconnect = () => {
  const handleRefreshNetwork = () => {
    NetInfo.refresh();
  };
  useEffect(() => {
    Toast.show({
      type: 'error',
      text1: 'Network is die',
      text2: '인터넷에 연결할 수 없습니다.',
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Oops </Text>
        <Text style={styles.titleText}>Network</Text>
        <Text style={styles.titleText}>DIE</Text>
      </View>
      <Pressable style={styles.refreshButton} onPress={handleRefreshNetwork}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default NetworkDisconnect;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  titleTextView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#eee',
  },
  refreshButton: {
    marginTop: 50,
    backgroundColor: '#777',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  refreshButtonText: {
    color: '#eee',
  },
});
