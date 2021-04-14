import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/Header';
import StickerForm from '../src/components/stickerForm';
import Footer from '../src/components/Footer';
import './reset.css';

ReactDOM.render(
  <>
    <Header />
    <StickerForm />
    <Footer />
  </>,
  document.getElementById('root'),
);
