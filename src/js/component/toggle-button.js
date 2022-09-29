import React from 'react';
import {ThemeContext} from './theme-context';

function TogglerButton() {

  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          className='btn'
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default TogglerButton;