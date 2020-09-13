import React from 'react';
import { MdPerson, MdDashboard, MdNotifications } from 'react-icons/md';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Workflow Bsine</h1>

      <div>
        <button type="button">
          <MdDashboard />
        </button>
        <button type="button">
          <MdNotifications />
        </button>
        <button type="button">
          <MdPerson />
        </button>
      </div>
    </Container>
  );
};

export default Header;
