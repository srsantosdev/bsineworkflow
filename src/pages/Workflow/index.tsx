import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Board from '../../components/Board';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Grid } from './styles';

const Workflow: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Sidebar />
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </Grid>
  );
};

export default Workflow;
