import React, { useCallback, useRef, useState } from 'react';
import { useDrag, useDrop, DragObjectWithType } from 'react-dnd';

import { TypeCard, useBoard } from '../../hooks/board';
import CardDetails from '../CardDetails';

import { Container } from './styles';

interface CardProps {
  index: number;
  listIndex: number;
  card: TypeCard;
}

type ItemProps = DragObjectWithType & {
  index: number;
  listIndex: number;
};

const Card: React.FC<CardProps> = ({ card, index, listIndex }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { move } = useBoard();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover: (item: ItemProps, monitor) => {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = cardRef.current?.getBoundingClientRect();
      const targetCenter =
        Number(targetSize?.bottom) - Number(targetSize?.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = Number(draggedOffset?.y) - Number(targetSize?.top);

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  const [openModalCardDetails, setOpenModalCardDetails] = useState(false);

  const toggleModalCardDetails = useCallback(() => {
    setOpenModalCardDetails(state => !state);
  }, []);

  dropRef(dragRef(cardRef));

  return (
    <>
      <CardDetails
        isOpen={openModalCardDetails}
        setIsOpen={toggleModalCardDetails}
        card={card}
        listIndex={listIndex}
        cardIndex={index}
      />

      <Container
        ref={cardRef}
        color={card.color}
        isDragging={isDragging}
        onClick={toggleModalCardDetails}
      >
        <h4>{card.title}</h4>
      </Container>
    </>
  );
};

export default Card;
