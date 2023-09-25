import {createMachine, assign} from 'xstate';

export const AuthMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QHkB2ACAhugggVwBcALAOgGUDNUJ0AjAT3QBkB7KAS1QGIAbN9TugDiLNjzABtAAwBdRKAAOLWOwLsWqeSAAeiAEwAWAJwkpADiNm9ZgGx6bARj1SjAGhD1EDhwHYSBnxsbKSkbAFYzAylfBwBfWPc0LFxCUgoqGgZmNk5efk5pOSQQJRU1DS1dBABaAz0SPTCAZiNQxvdPBCbbEiM9B0iDAys6hyN4xIxsfGISZAUwVE4odChRKHF0Pg4MBUwYLggNMBJOADcWAGsTpOnUuYWl1BW1sTAtnN39sARzlgBjTDlVCFQpaUqqdSaYpVGxGGymPQ+JoOKRRCwhPQdRDhBpmMK+OyjAxOCYgW4pWbzRbLVbrTbbQR7A5gABOrJYrJICh4QIAZpyALZzKaU0jUp4venvRlfGC-VAXQHA0GycHKSEVGE4oxhfyNHwBVoYqRYjxeMImIIOAnWGyBTE+MkUmakABKYH+YHYZ0g6AAKldFodjqdFUGRclXSQPV6fX7A9dUAqlUCoaqiooNcDKogjGMSD49PYwnYwtiak0DIWBj4ws7RdHY97fTRE8G2RyuTz+ULI3dZs3422g8m-sr07IwcUITntQhjYXutYnOXzQhGvVSzYomWG1H7oHMLA1M90IK4LBvlxtCegSdMHyCGyABSoqQASi4LsPLGPp5WC9YCvGBpyzMooVzBBhhIMIiz0JpgiafojB8NEK3sEwCV1OF0SiXx9wHUgAGEiE9S5aQAVVgNkBFQAUQ1QE4-mufsxRIUjyKomjWTogUUwBNMNAzdUIK1UAqmqewmhIYIHCaAkHHtZEfDMCsEXxbx8zGZpbSRQj2M4-4KLPajaM4BijiYsMLlYn9ZiMkyVjM3iLJYASJ2EqcHEzEps0g+dqm8WS7C0hT5MUowDArEwlOMVF4QiKRLUiAzo0c7jzPolguE7TluV5AgBVZYV7JIsjjMy1zso8oSQSnNUZ388SdH0GDLVQkYXBsfFIhikg4r6NDIlscI9HiBIQFQFgIDgLQytEzVoQkxBqhRBxZOicKlJ8FS1PXKTcWGbwmhRMJS0Mew0vudJqDoRhWB2Ra5xWhBUSXOxLGaFC0LCaL1yMGTUKCEJwkiaJ7WuqlHlpV4NhlT50GZMBnoC16SRkppDU61DTuQhwYqBwJglCCJ8J6qH3U9FsE1HVGWqqeE-DiqRulQ6IkRsCszD8Hw+ksHniVJSaypII8T1pICQJRpqxOW1qN1OkgzGQ00sfOgk-rNTp7DMUwdNw8x8KdEXG3uABZFhW3QAAJFgLwABW+en5ck+Tq2iMw0UQyIlIQrn12MGTkSGfMqxtGwURNyYDwciqnPQFy+JYF2oKk01C0BlxkV1Xw+Z8Csgt23ozBO8LzrGQIJtiIA */
    id: 'On a Auth',
    initial: 'Checking User info',
    predictableActionArguments: true,
    context: {
      jwt: '',
      errorMessage: undefined as string | undefined,
    },
    schema: {
      services: {} as {
        'sign in google': {
          data: string;
        };
        'store jwt in localstorage': {
          data: boolean;
        };
        fetch: {
          data: string;
        };
      },

      events: {} as
        | {type: 'log in Google'}
        | {type: 'log in'}
        | {type: 'sign in google'; data: string}
        | {type: 'store jwt in localstorage'}
        | {type: 'fetch'},
    },
    states: {
      'Stand by Login': {
        on: {
          'log in Google': 'Opening google login page',
          'log in': 'Moved HomePage',
        },
        entry: 'clearContext',
      },

      'Opening google login page': {
        invoke: {
          src: 'sign in google',
          onDone: [{target: 'Received Token', actions: 'assignJWTToContext'}],
          onError: [
            {target: 'Toasting message', actions: 'assignErrorToContext'},
          ],
        },
      },
      'Received Token': {
        invoke: {
          src: 'store jwt in localstorage',
          onDone: [{target: 'Checking User info'}],
          onError: [
            {target: 'Toasting message', actions: 'assignErrorToContext'},
          ],
        },
      },
      'Toasting message': {
        after: {
          '100': 'Stand by Login',
        },
      },
      'Moved HomePage': {},
      'Checking User info': {
        invoke: {
          src: 'fetch',
          onDone: [
            {
              target: 'Moved HomePage',
              actions: 'assignJWTToContext',
              cond: 'has JWT',
            },
            {target: 'Stand by Login'},
          ],
          onError: [{target: 'Stand by Login'}],
        },
      },
    },
  },
  {
    guards: {
      'has JWT': (context, event) => {
        return typeof event.data === 'string';
      },
    },
    actions: {
      assignJWTToContext: assign((context, event) => {
        return {
          jwt: event.data,
        };
      }),
      assignErrorToContext: assign((context, event) => {
        return {
          errorMessage: (event.data as Error).message,
        };
      }),
      clearContext: assign((context, event) => {
        return {
          jwt: '',
          errorMessage: '',
        };
      }),
    },
  },
);
