import React, { createContext, useCallback, useContext, useState } from 'react';
import produce from 'immer';
import { v4 as uuid } from 'uuid';

export interface TypeCard {
  id: string;
  title: string;
  color?: string;
  description: string;
  created_at: Date;
}

export interface TypeList {
  id: string;
  title: string;
  cards: Array<TypeCard>;
}

interface AddCardDTO {
  listIndex: number;
  title: string;
  description: string;
  color?: string;
  created_at: Date;
}

interface BoardData {
  lists: TypeList[];
  move: (fromList: number, toList: number, from: number, to: number) => void;
  addCard: (data: AddCardDTO) => void;
  removeCard: (listIndex: number, cardIndex: number) => void;
}

const BoardContext = createContext({} as BoardData);

export const BoardProvider: React.FC = ({ children }) => {
  const [lists, setLists] = useState<TypeList[]>([
    {
      id: uuid(),
      title: 'Planejada',
      cards: [],
    },
    {
      id: uuid(),
      title: 'Executando',
      cards: [],
    },
    { id: uuid(), title: 'Impasse', cards: [] },
    {
      id: uuid(),
      title: 'Finalizada',
      cards: [],
    },
  ]);

  const addCard = useCallback(
    ({ title, description, color, created_at, listIndex }: AddCardDTO) => {
      setLists(state =>
        produce(state, draft => {
          draft[listIndex].cards.push({
            id: uuid(),
            title,
            description,
            created_at,
            color,
          });
        }),
      );
    },
    [],
  );

  const removeCard = useCallback((listIndex: number, cardIndex: number) => {
    setLists(state =>
      produce(state, draft => {
        draft[listIndex].cards.splice(cardIndex, 1);
      }),
    );
  }, []);

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
    <BoardContext.Provider value={{ lists, move, addCard, removeCard }}>
      {children}
    </BoardContext.Provider>
  );
};

export function useBoard(): BoardData {
  const context = useContext(BoardContext);

  return context;
}
