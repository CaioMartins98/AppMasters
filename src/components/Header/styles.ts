import styled from 'styled-components';

export const Container = styled.div`
  background: #000321;
  color: white;
  font-family: 'Lobster';
  font-size: 55px;
  width: 100%;
  height: 145px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.14), 
              0px 3px 4px rgba(0, 0, 0, 0.12),
              0px 1px 8px rgba(0, 0, 0, 0.2); 

  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 760px){
 & > h1 {
   font-size: 80px;
 }
}
  
`;
