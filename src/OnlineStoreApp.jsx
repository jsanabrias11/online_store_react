

import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import NavMenu from './NavMenu';
import BasicTabs from './ProductManager';
import { ShoppingCarPage } from './ShoppingCarPage';



export const OnlineStoreApp = () => {
  return (
    <>      
      <NavMenu />
      <Routes >
        <Route path='/' element={ <HomePage />}/>
        <Route path='shoppingcar' element={ <ShoppingCarPage />}/>
        <Route path='productmanager' element={ <BasicTabs />}/>

        <Route path='/*' element={ <Navigate to="/"/>}/>

      </Routes>
    </>
    
  )
}
