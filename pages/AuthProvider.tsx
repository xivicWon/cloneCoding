import React, {createContext} from 'react';
import {useInterpret} from '@xstate/react';
import {AuthMachine} from '../machines/AuthMachine';

export const AppMachineContext = createContext(null);

const AppMachineContextProvider = ({children}) => {
  const service = useInterpret(AuthMachine, {
    services: {
      'sign in google': async () => {
        const jwt = 'google.erwerqewr.qweqweq';
        return jwt;
      },
      'sign in apple': async () => {
        const jwt = 'apple.erwerqewr.qweqweq';
        return jwt;
      },
      'store jwt in localstorage': async () => {
        return true;
      },
      fetch: async () => {
        const jwt = 'apple.erwerqewr.qweqweq';
        return jwt;
      },
    },
  })
    .onTransition(state => {
      console.log(
        `현재 상태: ${state.value} \t JWT: ${state.context.jwt} \t ErrorMessage: ${state.context.errorMessage}`,
      );
    })
    .start();

  return (
    <AppMachineContext.Provider value={service}>
      {children}
    </AppMachineContext.Provider>
  );
};

export {AppMachineContextProvider};
