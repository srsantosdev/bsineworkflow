import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 24px 24px;

  > h1 {
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: #212529;
    margin-bottom: 24px;
  }

  > div.dual-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    > div {
      flex: 1;

      &:first-child {
        margin-right: 8px;
      }

      &:last-child {
        margin-left: 8px;
      }
    }

    > div + div {
      margin-top: 0;
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }

  button {
    border: none;
    background: #1d3557;
    border-radius: 5px;

    width: 134px;
    padding: 8px 16px;

    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 16px;

    transition: background-color 0.2s;

    > svg {
      margin-right: 8px;
    }

    &:hover {
      background: ${shade(0.5, '#1d3557')};
    }
  }
`;
