import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';


const App = ({ children }) => (
  <>
    <Content>
      { children }
    </Content>
  </>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
