import React from 'react';
import { render } from 'react-dom';
import BasicExample from '../routes/BasicExample';

const styles = {
  fontFamily: 'sans-serif',
};

const App = () => (
  <div style={styles}>
    <BasicExample />
  </div>
);

render(<App />, document.getElementById('root'));
