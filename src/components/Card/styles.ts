import styled, { css } from 'styled-components';

interface ContainerProps {
  color?: string;
  isDragging: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 16px;

  padding: 2.4rem 1.6rem;
  box-shadow: 0px 1px 4px 0px rgba(213, 232, 246, 1);

  cursor: grab;

  > h4 {
    font-size: 14px;
    color: #212529;
  }

  ${props =>
    props.color &&
    css`
      &:before {
        content: '';
        width: 100%;
        height: 5px;
        background: ${props.color};
        border-radius: 5px 5px 0px 0px;

        position: absolute;
        top: 0;
        left: 0;
      }
    `}

  ${props =>
    props.isDragging &&
    css`
      border: 1px dashed rgba(0, 0, 0, 0.5);
      border-radius: 0;
      background: transparent;
      box-shadow: none;

      h4,
      header {
        opacity: 0;
      }

      &:before {
        opacity: 0;
      }
    `}
`;
