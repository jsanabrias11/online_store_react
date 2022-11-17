import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { Link as LinkReact, animateScroll as scroll } from "react-scroll";

// MUI
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export const ProductItem_edit = ({ valorKey, product }) => {
    const { products, deleteProduct, fillEditProduct } = useContext(ProductsContext);


    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={product.id}>
            <TableCell>{products[valorKey].id}</TableCell>
            <TableCell>{products[valorKey].title}</TableCell>
            <TableCell align='right'>{products[valorKey].CategoryId}</TableCell>
            <TableCell align='right'>
                <Button  variant="contained" size='small' color="warning" sx={{mr: 1.5}} >
                    <LinkReact smooth={true} to="edit_product" onClick={() => fillEditProduct(product)}>update</LinkReact>
                </Button>

                <Button variant="outlined" size='small' color="secondary" onClick={() => deleteProduct(product.id)}>delete</Button>
            </TableCell>
        </TableRow>
    )
}
