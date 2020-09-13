import styled, { css } from 'styled-components';

interface FieldProps {
  isFocused: boolean;
}

export const Container = styled.div`
  label {
    color: #253237;
  }
  & + div {
    margin-top: 16px;
  }
`;

export const Field = styled.div<FieldProps>`
  width: 100%;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;

  margin-top: 8px;
  padding: 10px 12px;

  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #1d3557;
    `}

  input {
    border: 0;
    background: transparent;
    flex: 1;
  }
`;
