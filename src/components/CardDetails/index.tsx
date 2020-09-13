import React, { useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import { MdDelete } from 'react-icons/md';

import { TypeCard, useBoard } from '../../hooks/board';

import Modal from '../Modal';

import { Container, Color } from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  card: TypeCard;
  listIndex: number;
  cardIndex: number;
}

const CardDetails: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  card,
  listIndex,
  cardIndex,
}) => {
  const { removeCard } = useBoard();

  const date = useMemo(() => {
    const formattedDate = format(card.created_at, "dd/MM/yyyy 'às' HH:mm");

    return formattedDate;
  }, [card]);

  const handleDeleteCard = useCallback(() => {
    removeCard(listIndex, cardIndex);

    setIsOpen();
  }, [removeCard, listIndex, cardIndex, setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} width={583}>
      <Container>
        <header>
          <h1>{card.title}</h1>

          <Color hex={card.color} />
        </header>

        <p>{card.description}</p>

        <footer>
          <strong>
            Criado em: <span>{date}</span>
          </strong>

          <button type="button" onClick={handleDeleteCard}>
            <MdDelete size={14} />
            Excluir Card
          </button>
        </footer>
      </Container>
    </Modal>
  );
};

export default CardDetails;
