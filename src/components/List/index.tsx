import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import { useDrop, DragObjectWithType } from 'react-dnd';

import { TypeList, useBoard } from '../../hooks/board';

import Card from '../Card';

import { Container } from './styles';
import CreateCard from '../CreateCard';

interface ListProps {
  list: TypeList;
  index: number;
}

type ItemProps = DragObjectWithType & {
  index: number;
  listIndex: number;
};

const List: React.FC<ListProps> = ({ list, index: listIndex }) => {
  const { move } = useBoard();

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover: (item: ItemProps) => {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;

      move(draggedListIndex, targetListIndex, draggedIndex, 0);

      item.index = 0;
      item.listIndex = targetListIndex;
    },
  });

  const [openModalCreateCard, setOpenModalCreateCard] = useState(false);

  const toggleModalCreateCard = useCallback(() => {
    setOpenModalCreateCard(state => !state);
  }, []);

  return (
    <>
      <CreateCard
        isOpen={openModalCreateCard}
        setIsOpen={toggleModalCreateCard}
        listIndex={listIndex}
      />

      <Container ref={dropRef}>
        <header>
          <h2>{list.title}</h2>

          <button type="button" onClick={toggleModalCreateCard}>
            <MdAdd size={20} />
          </button>
        </header>

        <ul>
          {list.cards.map((card, index) => (
            <Card
              key={card.id}
              color={card.color}
              title={card.title}
              index={index}
              listIndex={listIndex}
            />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default List;
