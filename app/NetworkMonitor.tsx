import {
  Dimensions,
  Platform,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {useNetInfo} from '@react-native-community/netinfo';

const convertSectionList = data => {
  if (Platform.OS === 'ios') {
    return [
      {
        title: 'state',
        data: [
          {title: 'type', value: data.type},
          {title: 'isConnected', value: data.isConnected},
        ],
      },
      {
        title: 'detail.wifi',
        data: [
          {
            title: 'isConnectionExpensive',
            value: data.details?.isConnectionExpensive,
          },
          {title: 'ssid', value: data.details?.ssid},
          {title: 'bssid', value: data.details?.bssid},
          {title: 'ipAddress', value: data.details?.ipAddress},
          {title: 'subnet', value: data.details?.subnet},
        ],
      },
    ];
  } else if (Platform.OS === 'android') {
    return [
      {
        title: 'state',
        data: [
          {title: 'type', value: data.type},
          {title: 'isConnected', value: data.isConnected},
        ],
      },
      {
        title: 'detail.wifi',
        data: [
          {
            title: 'isConnectionExpensive',
            value: data.details?.isConnectionExpensive,
          },
          {title: 'ssid', value: data.details?.ssid},
          {title: 'bssid', value: data.details?.bssid},
          {title: 'strength', value: data.details?.strength},
          {title: 'ipAddress', value: data.details?.ipAddress},
          {title: 'subnet', value: data.details?.subnet},
          {title: 'frequency', value: data.details?.frequency},
          {title: 'linkSpeed', value: data.details?.linkSpeed},
          {title: 'rxLinkSpeed', value: data.details?.rxLinkSpeed},
          {title: 'txLinkSpeed', value: data.details?.txLinkSpeed},
        ],
      },
    ];
  }
};

const {width: WINDOW_WIDTH} = Dimensions.get('screen');

const NetworkMonitor = () => {
  const netInfo = useNetInfo();
  const secionListData = convertSectionList(netInfo);
  const isConnected =
    netInfo.isConnected === null ? 'null' : netInfo.isConnected;

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `Network is  fresh ( ${isConnected} )( ${netInfo.type} )`,
      text2: '인터넷에 연결되었습니다.',
    });
  }, [netInfo.type, isConnected]);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.sectionList}
        sections={secionListData}
        initialNumToRender={20}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          return (
            <>
              <View style={styles.itemTitleView}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.itemValueView}>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            </>
          );
        }}
        renderSectionHeader={({section}) => {
          return <Text style={styles.header}>{section.title}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default NetworkMonitor;

const styles = StyleSheet.create({
  theme: {
    backgroundColor: '#222',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    gap: 20,
  },
  sectionList: {paddingHorizontal: 20},
  header: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
    width: WINDOW_WIDTH,
    textTransform: 'uppercase',
  },
  itemTitleView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#444',
    paddingHorizontal: 20,
    width: WINDOW_WIDTH - 40,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#eee',
    lineHeight: 40,
    height: 40,
  },
  itemValueView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#555',
    paddingHorizontal: 20,
    width: WINDOW_WIDTH - 40,
    height: 40,
    lineHeight: 40,
  },
  value: {
    fontSize: 18,
    color: '#ddd',
  },
});
