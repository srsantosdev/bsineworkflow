import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  width?: number;
  height?: number;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  setIsOpen,
  width,
  height,
}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={setIsOpen}
      ariaHideApp={false}
      style={{
        content: {
          position: 'relative',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F7',
          borderRadius: '5px',
          border: 'none',
          padding: 0,
          paddingTop: 16,
          width,
          height,
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
