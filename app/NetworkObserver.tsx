import React from 'react';
import NetworkDisconnect from './NetworkDisconnect';
import {useNetInfo} from '@react-native-community/netinfo';

const NetworkObserver = ({children}) => {
  const netInfo = useNetInfo();
  if (!netInfo.isConnected) {
    return <NetworkDisconnect />;
  }
  return children;
};

export default NetworkObserver;
