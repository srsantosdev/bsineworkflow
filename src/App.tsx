import React from 'react';

import Workflow from './pages/Workflow';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Workflow />
    </>
  );
};

export default App;
