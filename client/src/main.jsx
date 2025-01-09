import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import React, {createContext} from 'react';
import App from './App.jsx';
import UserStore from './store/UserStore'

export const Context = createContext(null)

createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
      user: new UserStore()
    }}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </Context.Provider>,

)
