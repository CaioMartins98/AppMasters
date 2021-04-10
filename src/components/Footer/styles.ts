import styled from 'styled-components';

export const Container = styled.div`
background: white;
height: 180px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-top: 1px solid #DEDEDE;

position: fixed;
bottom: 0px;
left: 0;
width: 100%;


& > p{
 font-family: 'Poppins';
 color: #000000;
 font-weight: 500;
 font-size: 28px;
 margin-bottom: 16px;
}


& > a{
  margin-left: 16px;
 margin-top: 25px;

}

@media (max-width: 760px){


 position: relative;
  
 & > p {
   font-size: 20px;
 }
}
`;