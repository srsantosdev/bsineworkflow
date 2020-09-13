import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  grid-area: HEADER;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 3.2rem;

  h1 {
    font-variant: small-caps;
    font-weight: 500;
    font-size: 2rem;
    color: #1d3557;
  }

  div {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      background: transparent;

      transition: color 0.2s;

      color: #2b2d42;

      > svg {
        width: 20px;
        height: 20px;
      }

      &:hover {
        color: ${shade(0.5, '#2b2d42')};
      }
    }
  }
`;
