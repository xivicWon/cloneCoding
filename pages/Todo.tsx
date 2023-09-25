import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useMachine} from '@xstate/react';
import {todosMachine} from '../machines/todoAppMachine';
import TodoStatus from './TodoStatus';

const App = () => {
  const [state, send] = useMachine(todosMachine, {
    services: {
      loadTodos: async () => {
        return ['123', '332'];
      },
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <TodoStatus machineState={state} />
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={() => send({type: 'create new'})}
          style={styles.button}>
          <Text style={styles.buttonText}>create new</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => send({type: 'change form input', value: 'test'})}
          style={styles.button}>
          <Text style={styles.buttonText}>change form input</Text>
        </TouchableOpacity>
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
  displaySeciton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#a00',
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
