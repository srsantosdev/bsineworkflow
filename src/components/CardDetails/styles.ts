import styled from 'styled-components';

interface ColorProps {
  hex?: string;
}

export const Container = styled.div`
  padding: 0 24px 24px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;

    h1 {
      font-weight: 600;
      font-size: 18px;

      color: #212529;
    }
  }

  > p {
    font-size: 14px;
    line-height: 16px;

    color: #212529;

    margin-bottom: 40px;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      border: 0;
      background: transparent;

      color: #212529;
      font-size: 14px;

      display: flex;
      align-items: center;

      transition: color 0.2s;

      &:hover {
        color: #e63946;
      }

      > svg {
        margin-right: 4px;
      }
    }
  }

  strong {
    font-size: 14px;

    span {
      font-weight: normal;
      color: #212529;
    }
  }
`;

export const Color = styled.span<ColorProps>`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.hex ? props.hex : 'transparent')};
  border-radius: 5px;
`;
