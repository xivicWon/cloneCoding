import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const TodoStatus = ({machineState}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displaySeciton}>
        <Text>{JSON.stringify(machineState.value)}</Text>
        <Text>{JSON.stringify(machineState.context)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TodoStatus;

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
});
