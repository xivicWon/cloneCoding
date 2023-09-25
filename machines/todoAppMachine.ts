import {assign, createMachine} from 'xstate';

export const todosMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FWwHQBlUEMIBLAOygAIAVdTAYgxLC1IDdUBrJtDbPQ0itR4JWqAMb5kRVCQDaABgC6CxYlAAHTESky1IAB6IATAGYA7FgCsATnOWANCACeiABwBGKwF8vj7plwCYjIqGlhaMAAnSNRIrHUAG0kAM1iAWyx-XiCBUOFRCR05JRU9TVhtaRI9QwRTCxs7RxcEdzMAFix2yxN3I0sfPzCsIUxyPghIWjFIsEkwckYAd1KkEHLK3TXagDYjVyx5U3am50R3eRMsIyMdyz2B3xAsrABhWclc5fJ-LABlAAWqCWuVSkTS5FI6gArshpgD8GQFmCIVDYasNFoijVzvIOlhXCYjJc+g4zq0egTLO57v0fE8SOg4HosmUsVUcQgALQ7ZqILlGTzudqudo3IztPoXWyuQbPYYTXKjeBrDbY7aIMV8hC2LDWMx3B5yl7K8ZBSBsirq0C1drtaxYEwnMxkloXK43Q10p4vRUhLLkKIxWYQS2baoahB2h1O05u6w7LBtBOuF3G4bvOZSELffxh60GRBmaxGQ6uRou7U7RMmam0x5DHhvD7Zii5mj-IEgkIoyEkGHIfMcyOi+Rliuu86uB1mW71+leIA */
    schema: {
      services: {} as {
        loadTodos: {
          data: string[];
        };
      },
      events: {} as
        | {type: 'create new'}
        | {type: 'loadTodos'; data: string[]}
        | {type: 'change form input'; value: string},
    },
    context: {
      todos: [] as string[],
      errorMessage: undefined as string | undefined,
      createTodoFormInput: '',
    },
    id: 'todos',
    initial: 'Loading Todos',
    states: {
      'Loading Todos': {
        invoke: {
          src: 'loadTodos',
          onDone: [
            {
              target: 'Todos Loaded',
              actions: 'assignTodosToContext',
            },
          ],
          onError: [
            {
              target: 'Loading todos errored',
              actions: 'assignErrorToContext',
            },
          ],
        },
      },
      'Todos Loaded': {
        on: {
          'create new': {
            target: 'Creating new todo',
          },
        },
      },
      'Loading todos errored': {},
      'Creating new todo': {
        states: {
          'Showing form input': {
            on: {
              'change form input': {
                target: 'Showing form input',
                actions: 'assignFormInputToContext',
                internal: true,
              },
            },
          },
        },

        initial: 'Showing form input',
      },
    },
  },
  {
    actions: {
      assignTodosToContext: assign((context, event) => {
        return {
          todos: event.data,
        };
      }),
      assignErrorToContext: assign((context, event) => {
        return {
          errorMessage: (event.data as Error).message,
        };
      }),
      assignFormInputToContext: assign((context, event) => {
        return {
          createTodoFormInput: event.value,
        };
      }),
    },
  },
);
