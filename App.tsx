import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import VectorImage from 'react-native-vector-image';

const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    Login with Facebook
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="google" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 26, color: '#eee'}}>
      Login with Facebook
    </Text>
  </Icon.Button>
);

const myIcon1 = <Icon2 name="comment-alt" size={30} color="#900" />; // Defaults to regular
const myIcon2 = <Icon2 name="comment-dots" size={30} color="#900" solid />;
const myIcon3 = <Icon2 name="comments" size={30} color="#900" light />; // Only in FA5 Pro

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
      {myButton}
      {customTextButton}
      {myIcon1}
      {myIcon2}
      {myIcon3}
      <VectorImage source={require('./assets/wrench.svg')} />
      {/* <VectorImage source={require('./assets/icons/apple.svg')} /> */}
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
});
