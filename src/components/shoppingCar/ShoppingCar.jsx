import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { ShoppingCarFooter } from './ShoppingCarFooter';
import { ShoppingCartItem } from './ShoppingCartItem';

//Mui
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export const ShoppingCar = () => {
    const { shoppingCar } = useContext(ProductsContext);

    const cardEmptyMsj = <tr id="carrito-footer"><th scope="row" colSpan="5">Carrito vacío - comience a comprar!</th></tr>;

    return (
        <div>
            <Container maxWidth="md"> 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 365 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                    Details
                                </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>                                
                                <TableCell>Desc</TableCell>
                                <TableCell width={150}align="right">Qty.</TableCell>                                
                                <TableCell align="right">Unit</TableCell>
                                <TableCell width= {250} align="center">Action</TableCell>
                                <TableCell align="right">Sum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shoppingCar.length === 0 ? cardEmptyMsj : shoppingCar.map((object, index) => <ShoppingCartItem key={object.id} valorKey={index} product={object} />)}
                            {shoppingCar.length === 0 ? '' : <ShoppingCarFooter />}                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}
