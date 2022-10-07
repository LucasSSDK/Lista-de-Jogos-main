import React from 'react'

import ReactDOM from 'react-dom/client'

import  { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './assets/GlobalStyle'

import Router from './routers';

import Mock from './mock';

Mock.Initialize();

import App from './App'

import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter />
      <GlobalStyle />
      <App />
      
    <BrowserRouter />
  </React.StrictMode>
)
