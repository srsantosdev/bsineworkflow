import React, { useRef, useState, useCallback } from 'react';

import { Container, Field } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <label>{label}</label>

      <Field isFocused={isFocused}>
        <input
          type="text"
          ref={inputRef}
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      </Field>
    </Container>
  );
};

export default Input;
