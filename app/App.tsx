import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Dropdown} from './components/dropdown';

const options = [
  {label: 'Chart', iconName: 'barschart'},
  {label: 'Book', iconName: 'book'},
  {label: 'Calendar', iconName: 'calendar'},
  {label: 'Camera', iconName: 'camera'},
];

const header = {
  label: 'Header',
  iconName: 'ellipsis1',
};

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Dropdown header={header} options={options} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
  },
});

export default App;
