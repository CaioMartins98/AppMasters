import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1px;
  text-align: center;

  button {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  div {
    padding-left: 20px;
  }
`;

export const ContainerForm = styled(Form)`
  width: 100vw;

  @media (max-width: 760px) {
    height: 35vh;
  }
`;

export const Label = styled.label`
  font-family: 'Poppins';
  color: #000000;
  font-size: 32px;
  font-weight: 400;
  margin-top: 12px;
  & > label > button {
    margin-bottom: 8px;
  }

  @media (max-width: 760px) {
    font-size: 22px;
  }
`;

export const StyledInput = styled(Field)`
  width: 300px;
  height: 36px;
  border: 1px solid #000000;
  background-color: #fff;
  border-radius: 4px;
  margin-left: 12px;
  margin-top: 5px;
  font-family: 'Poppins';
  font-size: 28px;
  color: black;

  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 760px) {
    width: 300px;
    height: 30px;
    font-size: 22px;
  }

  ${(props) =>
    props.disabled === true &&
    `
  opacity: 0.5;
  color: gray;
  `}
`;

export const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  display: block;

  border: none;
  background: #000000;
  border-radius: 8px;
  width: 290px;
  height: 70px;

  margin-top: 26px;
  font-family: 'Poppins';
  font-size: 36px;
  color: white;
  cursor: pointer;

  :hover {
    background: white;
    color: #000000;
    border: 3px solid #000000;
    transition: 0.5s;
  }

  :focus {
    outline: none;
  }
  @media (max-width: 760px) {
    align-items: center;
    justify-content: center;
    display: flex;

    width: 320px;
    height: 35px;
    font-size: 24px;
    margin-top: 46px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 16px;
  font-family: 'Poppins';
  color: red;
`;
