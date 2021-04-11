import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  align-items:center;
  justify-content:center;
  display:flex;
  height: 65vh;
`;

export const ContainerForm = styled(Form)`
  height: 45vh;
  overflow-y: scroll;
  
  @media (max-width: 760px){
    height: 35vh;
}
`;
export const Label = styled.label`
  font-family: 'Poppins';
  color: #BDBDBD;
  font-size: 32px;
  margin-top: 12px;
  & > label > button {
    margin-bottom: 8px;
  }
  
  @media (max-width: 760px){
   font-size: 22px;
}
  
`;
export const StyledInput = styled(Field)`
  width: 300px;
  height: 35px;
  border:1px solid #000321;
  background-color: #fff;
  border-radius: 4px;
  margin-left: 12px;
  margin-top: 5px;
  font-family:'Poppins';
  font-size:32px;
  color: black;
  
  align-items:center;
  display: flex;
  justify-content:center;
  
  @media (max-width: 760px){
  width: 300px;
  height: 30px;
  font-size: 22px;
}
`;

export const StyledButton = styled.button`
  align-items:center;
  justify-content:center;
  display:flex;
  border:none;
  background:#000321;
  border-radius: 8px;
  width: 330px;
  height: 70px;
  
  margin-top: 26px;
  font-family: 'Poppins';
  font-size: 36px;
  color: white;
  cursor: pointer;
 
  
 :hover {
    background:white;
    color:#000321;
    border: 2px solid #000321;
    transition:0.8s
  }

  :focus{
    
    outline:none;
  }
  @media (max-width: 760px){
    align-items:center;
    justify-content:center;
    display:flex;
    
    & > button{
    width: 320px;
  height: 35px;
  font-size: 24px;
  margin-top: 46px;
    }
}
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 16px;
  font-family: 'Poppins'; 
  color: red;
`;