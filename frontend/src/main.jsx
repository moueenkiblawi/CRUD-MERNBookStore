import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from 'notistack';

import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </SnackbarProvider>
)
