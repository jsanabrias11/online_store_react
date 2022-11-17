import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';

// MUI
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const ShoppingCartItem = ({ product, valorKey }) => {
    

    const { shoppingCar,  increaseAmount, decreaseAmount, deleteCardItem, products, setshoppingCar } = useContext(ProductsContext);
    
    const filterProduct = products.filter(item => item.id == product.id)    

    return (
        
        <TableRow key={product.id}>
        <TableCell>{filterProduct[0].title}</TableCell>
        <TableCell align="right">{shoppingCar[valorKey].cantidad }</TableCell>        
        <TableCell align="right">{filterProduct[0].precio }</TableCell>
        <TableCell align="right">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1.5, sm: 2, md: 2 }} alignSelf={'center'}>
              <Grid xs={12} md={4} item={true}>
                <Button size='small' variant="contained" color="success" onClick={ ()=> increaseAmount(product) }>+</Button>
              </Grid>
              <Grid xs={12} md={4} item={true}>
                <Button size='small' variant="contained" color="secondary" onClick={ ()=> decreaseAmount(product) }>-</Button> 
              </Grid>
              <Grid xs={12} md={4} item={true}>
                <Button size='small' variant="outlined"  onClick={ ()=> deleteCardItem(product.id) }>Delete</Button>
              </Grid>
            </Grid>
               
              
               
        </TableCell>
        <TableCell align="right">{(shoppingCar[valorKey].cantidad) * (filterProduct[0].precio) }</TableCell>
        </TableRow>   
    )
}
