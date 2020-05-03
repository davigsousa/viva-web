import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Content from './Content';

import logo from '../assets/logo.png';

const App = ({ children }) => (
  <>
    <Header
      logo={logo}
      links={[
        { name: 'Início', to: '/#' },
        { name: 'Quem Somos?', to: '/#sobre' },
        { name: 'Contato', to: '/#contato' },
      ]}
      actionButton={{ name: 'Download', to: '/#' }}
    />
    <Content>
      { children }
    </Content>
  </>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
