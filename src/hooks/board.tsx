import React, { createContext, useCallback, useContext, useState } from 'react';
import produce from 'immer';
import { v4 as uuid } from 'uuid';

export interface TypeCard {
  id: string;
  title: string;
  color?: string;
}

export interface TypeList {
  id: string;
  title: string;
  cards: Array<TypeCard>;
}

interface BoardData {
  lists: TypeList[];
  move: (fromList: number, toList: number, from: number, to: number) => void;
}

const BoardContext = createContext({} as BoardData);

export const BoardProvider: React.FC = ({ children }) => {
  const [lists, setLists] = useState<TypeList[]>([
    {
      id: uuid(),
      title: 'Planejada',
      cards: [{ id: uuid(), title: 'Testando isso aqui' }],
    },
    {
      id: uuid(),
      title: 'Executando',
      cards: [
        { id: uuid(), title: 'Testando isso aqui', color: '#83c5be' },
        { id: uuid(), title: 'Testando isso aqui' },
      ],
    },
    { id: uuid(), title: 'Impasse', cards: [] },
    {
      id: uuid(),
      title: 'Finalizada',
      cards: [
        { id: uuid(), title: 'Testando isso aqui', color: '#283618' },
        { id: uuid(), title: 'Testando isso aqui' },
        { id: uuid(), title: 'Testando isso aqui', color: '#deaaff' },
      ],
    },
  ]);

  const move = useCallback(
    (fromList: number, toList: number, from: number, to: number) => {
      setLists(state =>
        produce(state, draft => {
          const dragged = draft[fromList].cards[from];

          draft[fromList].cards.splice(from, 1);
          draft[toList].cards.splice(to, 0, dragged);
        }),
      );
    },
    [],
  );

  return (
    <BoardContext.Provider value={{ lists, move }}>
      {children}
    </BoardContext.Provider>
  );
};

export function useBoard(): BoardData {
  const context = useContext(BoardContext);

  return context;
}
