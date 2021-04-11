import React from 'react';
import {Container} from './styles';
import GitHubIcon from '../../assets/github.svg';
import AppMaster from '../../assets/appmasters.png';

const Footer = () =>{
  return (
    <Container>
    <p>Desenvolvido por Caio Martins para AppMasters</p>
    <div>
    <a href="https://github.com/CaioMartins98" 
    target="_blank"
    rel="noreferrer"
    >
      <img src={GitHubIcon} 
      alt="GitHub icon"/>
    </a>
    <a href="https://appmasters.io/pt/"
      target="blank"
      rel="noreferrer">
        <img src={AppMaster} alt="App Masters icon"/>
      </a>
</div>
    </Container>
  )
}

export default Footer;