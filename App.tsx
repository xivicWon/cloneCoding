import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const WEB_CLINET_ID =
  '000000000000-a50lrl3kcf9hvutku2ml5vppqb1m2600.apps.googleusercontent.com';
const IOS_CLIENT_ID =
  '000000000000-vkfmvk32rdt00tsdnl02iq2v3em1no5m.apps.googleusercontent.com';

GoogleSignin.configure({
  iosClientId: IOS_CLIENT_ID,
  webClientId: WEB_CLINET_ID,
});
const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const GoogleSignIn = async () => {
    console.log('GoogleSignIn');
    setMsg('');
    setIsLoading(true);
    try {
      // await GoogleSignin.hasPlayServices();
      const {user, idToken, serverAuthCode} = await GoogleSignin.signIn();
      setUserInfo(JSON.stringify(user));
      console.log(idToken, user, serverAuthCode);
    } catch (error) {
      setMsg(`[ErrorCode : ${error.code} ] [${error.message}]`);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    } finally {
      console.log('End');
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>WEB: {WEB_CLINET_ID}</Text>
        <Text>IOS: {IOS_CLIENT_ID}</Text>
      </View>
      <Pressable
        onPress={() => GoogleSignIn()}
        style={styles.button}
        disabled={isLoading}>
        <Text style={styles.buttonText}>GoogleSignIn</Text>
      </Pressable>
      <View>
        <Text>{userInfo}</Text>
        <Text>{msg}</Text>
        <Text>{isLoading ? 'Loading...' : 'Waiting...'} </Text>
      </View>
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
  button: {
    backgroundColor: '#33F',
    width: 120,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#57F',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
  },
});
