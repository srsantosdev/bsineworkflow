import React from 'react';

import { BoardProvider } from './hooks/board';

import Workflow from './pages/Workflow';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <BoardProvider>
      <GlobalStyle />
      <Workflow />
    </BoardProvider>
  );
};

export default App;
