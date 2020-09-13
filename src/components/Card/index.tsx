import React, { useRef } from 'react';
import { useDrag, useDrop, DragObjectWithType } from 'react-dnd';
import { useBoard } from '../../hooks/board';

import { Container } from './styles';

interface CardProps {
  color?: string;
  title: string;
  index: number;
  listIndex: number;
}

type ItemProps = DragObjectWithType & {
  index: number;
  listIndex: number;
};

const Card: React.FC<CardProps> = ({ color, title, index, listIndex }) => {
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

  dropRef(dragRef(cardRef));

  return (
    <Container ref={cardRef} color={color} isDragging={isDragging}>
      <h4>{title}</h4>
    </Container>
  );
};

export default Card;
