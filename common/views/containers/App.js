// AdminMain
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import Menu from '../components/Menu/Menu';
import Container from '../components/Container/Container';
import { LoginStatus } from './Login';
import AppModal from './AppModal';
import { navItems } from '../config/nav';

import '../styles/reset.css';
import '../styles/typography.css';

const App = ({ children }) => (
  <Container>
    <Sidebar>
      <LoginStatus />
      <Menu items={navItems} />
    </Sidebar>
    <Main>
      {children}
    </Main>
    <AppModal />
  </Container>
);

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
