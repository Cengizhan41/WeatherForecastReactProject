import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/carousel.js";
import { GeneralContextProvider } from './Context/GeneralContext.jsx'
import { BrowserRouter } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralContextProvider>
      <BrowserRouter> 
    <App /> 
      </BrowserRouter>
    </GeneralContextProvider>  
  </React.StrictMode>,
)
