import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import React, {createContext} from 'react';
import App from './App.jsx';
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'

export const Context = createContext(null)

createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </Context.Provider>,

)
