import styled from 'styled-components';

export const Grid = styled.div`
  height: 100vh;
  display: grid;

  grid-template-columns: 80px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'SIDEBAR HEADER'
    'SIDEBAR BOARD';
`;
