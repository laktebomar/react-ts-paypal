import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css';  
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Product';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/products/:id' element={<Product />}/>
            <Route path='*' element={<App />}/>
          </Routes>
        </BrowserRouter>
    
  </React.StrictMode>,
)
