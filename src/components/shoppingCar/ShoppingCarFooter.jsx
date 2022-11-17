import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';

// MUI
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const ShoppingCarFooter = () => {

  const { shoppingCar, carEmpty, products } = useContext(ProductsContext);

  // Total Amount
  const totalAmount = shoppingCar.reduce((acc, unidad) => acc + unidad.cantidad, 0);

  //Id products in shoppingcart
  const IdProductsInShoppingCart = shoppingCar.map(product => product.id)

  // Total price
  const totalPrice = shoppingCar.reduce((acc, unidad) => (unidad.cantidad * unidad.precio) + acc, 0);

  return (
    <>
      <TableRow>
        <TableCell rowSpan={3} />
        <TableCell colSpan={2}>Total products</TableCell>
        <TableCell align="right">{totalAmount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2}>Iva</TableCell>
        
        <TableCell align="right">Price includes IVA</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2}>Total</TableCell>
        <TableCell align="right">{totalPrice}</TableCell>
      </TableRow>
    </>
  )
}
