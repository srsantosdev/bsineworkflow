import React, { useCallback, useState } from 'react';
import { MdCheck } from 'react-icons/md';
import { useBoard } from '../../hooks/board';
import Input from '../Input';

import Modal from '../Modal';

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  listIndex: number;
}

const CreateCard: React.FC<ModalProps> = ({ isOpen, setIsOpen, listIndex }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [description, setDescription] = useState('');

  const { addCard } = useBoard();

  const handleAddCard = useCallback(() => {
    if (title && description && listIndex >= 0) {
      addCard({ title, color, description, listIndex, created_at: new Date() });
      setIsOpen();
    }
  }, [addCard, color, description, title, listIndex, setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} width={583}>
      <Container>
        <h1>Criar Card</h1>

        <div className="dual-input">
          <Input
            label="Título"
            name="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <Input
            label="Cor"
            name="color"
            value={color.toUpperCase()}
            onChange={event => setColor(event.target.value)}
          />
        </div>

        <Input
          label="Descrição"
          name="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <footer>
          <button type="button" onClick={handleAddCard}>
            <MdCheck size={20} /> Criar
          </button>
        </footer>
      </Container>
    </Modal>
  );
};

export default CreateCard;
