import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductsContextProvider from './context/productsContext'
import { OnlineStoreApp } from './OnlineStoreApp'
import { BrowserRouter } from 'react-router-dom';

//MUI
import { CssBaseline } from '@mui/material';
import { ThemeProvider} from '@mui/material/styles';
import theme from './themeConfig'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <React.StrictMode>
      <ProductsContextProvider>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <OnlineStoreApp />
        </ThemeProvider>
      </ProductsContextProvider>     
    </React.StrictMode>  
  </BrowserRouter>  
)

