export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground-default': '#191B28',
    '--foreground-secondary': '#41474D',
    '--foreground-tertiary': '#797C80',
    '--foreground-quaternary': '#F4FAFF',
    '--foreground-light': '#41474D',

    '--background-default': '#F4FAFF',
    '--background-secondary': '#FFFFFF',
    '--background-tertiary': '#fff',
    '--background-light': '#FFFFFF',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#24B286',
    '--primary-light': '#B2FFE7',

    '--error-default': '#EF3E36',
    '--error-dark': '#800600',
    '--error-light': '#FFCECC',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(92, 125, 153, 0.5)'
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--foreground-default': '#FFF',
    '--foreground-secondary': '#A3B9CC',
    '--foreground-tertiary': '#F4FAFF',
    '--foreground-quaternary': '#E5E5E5',
    '--foreground-light': '#FFFFFF',

    '--background-default': '#242739',
    '--background-secondary': '#191B28',
    '--background-tertiary': '#31344a',
    '--background-light': '#41474D',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#24B286',
    '--primary-light': '#B2FFE7',

    '--error-default': '#EF3E36',
    '--error-dark': '#800600',
    '--error-light': '#FFCECC',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(8, 9, 10, 0.5)'
  }
};
