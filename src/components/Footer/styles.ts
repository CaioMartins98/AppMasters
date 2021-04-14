import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dedede;

  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;

  & > p {
    font-family: 'Poppins';
    color: #000000;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 15px;
  }

  & > a {
    margin-left: 16px;
    margin-top: 24px;
  }

  @media (max-width: 760px) {
    position: relative;
    height: 350px;

    & > p {
      font-size: 18px;

      text-align: center;
    }
    & > a {
      margin-left: 16px;
      margin-top: 20px;
    }
  }
`;
