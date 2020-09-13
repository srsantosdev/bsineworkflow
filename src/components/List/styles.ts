import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 280px;

  & + div {
    margin-left: 16px;
  }

  header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.8rem;

    h2 {
      font-weight: 500;
      font-size: 1.6rem;
      color: #212529;
    }

    > button {
      border: 0;
      background: transparent;
      color: #212529;

      transition: color 0.2s;

      &:hover {
        color: #e63946;
      }
    }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #e63946;
      content: '';
    }
  }

  > ul {
    margin-top: 2.4rem;
  }
`;
