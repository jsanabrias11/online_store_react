import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';

//Material UI
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';


export const ProductsCard = ({ valorKey, product }) => {   
    const { addShoppingCar } = useContext(ProductsContext);
    
    return (        
        <Card xs={{ maxWidth: 345}}>
        <CardMedia
          component="img"
          md={{ height: 400 }}
          image={product.thumbnailUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {product.precio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" variant="contained" onClick={ () => addShoppingCar(product) }>Add to Cart</Button>
        </CardActions>
      </Card>    
    )
}
