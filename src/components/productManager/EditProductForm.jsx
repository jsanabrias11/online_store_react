import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext'

//MUI
import { Button, Grid, TextField, Typography, Box } from '@mui/material';


export const EditProductForm = () => {
    const { productToEdit, setProductToEdit, editProduct } = useContext(ProductsContext);
    

    const handleChange = (e) => {
        const newProductToEdit = ({...productToEdit, [e.target.name] : e.target.value});
        setProductToEdit(newProductToEdit);        
    }

    return (
        <Box component="div" id='edit_product' mb={5}>
            <Typography align='center' variant="h4" color="initial" m={5}>Edit product</Typography> 
            <form  className='createproduct__form'>
                <Grid container rowSpacing={1} columnSpacing={2} p={1}>
                    <Grid xs={12} md={6} item={true}>
                        <TextField  fullWidth name='title' value={productToEdit.title} id="outlined-basic" label="Title" variant="outlined" margin="normal" required onChange={ handleChange }/>
                    </Grid>
                    <Grid xs={12} md={6} item={true}>
                        <TextField  fullWidth name='description' value={productToEdit.description} id="outlined-basic" label="Description1" variant="outlined" margin="normal" required onChange={ handleChange }/>
                    </Grid>
                    <Grid xs={12} md={6} item={true}>
                        <TextField  fullWidth name='precio' value={productToEdit.precio} id="outlined-basic" label="Price" variant="outlined" margin="normal" required onChange={ handleChange }/>
                    </Grid>
                    <Grid xs={12} md={6} item={true}>
                        <TextField  fullWidth name='thumbnailUrl'  value={productToEdit.thumbnailUrl} id="outlined-basic" label="thumbnailUrl" variant="outlined" margin="normal" required onChange={ handleChange }/>
                    </Grid>
                    <Grid xs={12} md={6} item={true}>
                        <TextField  fullWidth name='CategoryId' value={productToEdit.CategoryId} id="outlined-basic" label="CategoryId" variant="outlined" margin="normal" onChange={ handleChange }/>
                    </Grid>
                </Grid>
                
                <Button variant="contained" sx={{mt: 4, width : 300}} onClick={ ()=>editProduct(productToEdit.id)}>Edit </Button>
                
            </form>    
        </Box>
    )
}
