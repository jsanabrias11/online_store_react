import { ProductsCard } from './ProductsCard';
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';

// MUI
import { Box, Grid, Typography } from '@mui/material';


export const ProductsList = () => {

  const { products } = useContext(ProductsContext);
  
  return (
    <Box sx={{mt: 5, mb: 20}}>
        <Typography variant="h4" color="initial" align='center' mb={4} >Online Store</Typography>
        
        <Grid container  minWidth={320} rowSpacing={3} columnSpacing={{ xs: 1.5, sm: 2, md: 3 }}>        
          { products.map((product, index) => (
            <Grid xs={6} md={4} key={ product.id } item={true}>        
              <ProductsCard  valorKey={ index } product={ product }/>
            </Grid>
            ))
          }          
        </Grid>               
    </Box>
  )
}
