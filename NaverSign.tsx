import React, {useState} from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from '@react-native-seoul/naver-login';

const consumerKey = 'IWI_OODiX8CTR8VN49gJ';
const consumerSecret = '_wA8PICYf8';
const appName = 'saft';
const serviceUrlScheme = 'naverLogin';

const NaverSign = () => {
  const [success, setSuccessResponse] =
    useState<NaverLoginResponse['successResponse']>();
  const [failure, setFailureResponse] =
    useState<NaverLoginResponse['failureResponse']>();
  const [getProfileRes, setGetProfileRes] = useState<GetProfileResponse>();

  const login = async () => {
    const {failureResponse, successResponse} = await NaverLogin.login({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlScheme,
    });
    setSuccessResponse(successResponse);
    setFailureResponse(failureResponse);
  };

  const logout = async () => {
    try {
      await NaverLogin.logout();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  const getProfile = async () => {
    try {
      const profileResult = await NaverLogin.getProfile(success!.accessToken);
      setGetProfileRes(profileResult);
    } catch (e) {
      setGetProfileRes(undefined);
    }
  };

  const deleteToken = async () => {
    try {
      await NaverLogin.deleteToken();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, padding: 24}}>
        {!success ? (
          <>
            <Button title={'Naver Login'} onPress={login} />
          </>
        ) : null}
        <Gap />
        {success ? (
          <>
            <Button title="Get Profile" onPress={getProfile} />
            <Gap />
            <Button title={'Naver Logout'} onPress={logout} />
            <Gap />
            <Button title="Delete Token" onPress={deleteToken} />
            <Gap />
            <ResponseJsonText name={'Success'} json={success} />
          </>
        ) : null}
        <Gap />
        {failure ? <ResponseJsonText name={'Failure'} json={failure} /> : null}
        <Gap />
        {getProfileRes ? (
          <ResponseJsonText name={'GetProfile'} json={getProfileRes} />
        ) : null}
      </ScrollView>
    </View>
  );
};
const Gap = () => <View style={{marginTop: 24}} />;
const ResponseJsonText = ({json = {}, name}: {json?: object; name: string}) => (
  <View
    style={{
      padding: 12,
      borderRadius: 16,
      borderWidth: 1,
      backgroundColor: '#242c3d',
    }}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
      {name}
    </Text>
    <Text style={{color: 'white', fontSize: 13, lineHeight: 20}}>
      {JSON.stringify(json, null, 4)}
    </Text>
  </View>
);

export default NaverSign;
