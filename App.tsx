import {StyleSheet, View} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import NetworkObserver from './app/NetworkObserver';
import NetworkMonitor from './app/NetworkMonitor';
// import NetInfo from '@react-native-community/netinfo';

// NetInfo.configure({
//   reachabilityUrl: 'https://localhost:9000',
//   reachabilityTest: async response => response.status === 204,
//   // The number of milliseconds between internet reachability checks
//   // when the internet was previously detected.
//   reachabilityLongTimeout: 60 * 1000, // 60s
//   // The number of milliseconds between internet reachability checks
//   // when the internet was *not* previously detected.
//   reachabilityShortTimeout: 5 * 1000, // 5s
//   reachabilityRequestTimeout: 6000 * 1000, // 15s
//   reachabilityShouldRun: () => true,
//   shouldFetchWiFiSSID: true, // met iOS requirements to get SSID. Will leak memory if set to true without meeting requirements.
//   useNativeReachability: true,
// });

export default function App() {
  return (
    <View style={styles.theme}>
      <NetworkObserver>
        <NetworkMonitor />
      </NetworkObserver>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  theme: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
});
