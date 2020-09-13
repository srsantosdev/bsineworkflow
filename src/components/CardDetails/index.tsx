import React, { useMemo } from 'react';
import { format } from 'date-fns';

import { TypeCard } from '../../hooks/board';

import Modal from '../Modal';

import { Container, Color } from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  card: TypeCard;
}

const CardDetails: React.FC<ModalProps> = ({ isOpen, setIsOpen, card }) => {
  const date = useMemo(() => {
    const formattedDate = format(card.created_at, "dd/MM/yyyy 'às' HH:mm");

    return formattedDate;
  }, [card]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} width={583}>
      <Container>
        <header>
          <h1>{card.title}</h1>

          <Color hex={card.color} />
        </header>

        <p>{card.description}</p>

        <strong>
          Criado em: <span>{date}</span>
        </strong>
      </Container>
    </Modal>
  );
};

export default CardDetails;
