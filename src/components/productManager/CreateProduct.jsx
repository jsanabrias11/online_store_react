import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext'

// MUI
import { Box, Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export const CreateProduct = () => {
    const { productToCreate, setProductToCreate, createProduct } = useContext(ProductsContext)

    const handleChange = (e) => {
        const newProduct = ({ ...productToCreate, [e.target.name]: e.target.value });
        setProductToCreate(newProduct);
    }

    return (    
        <Box component="div" minWidth={250} id='aqui1'>
            <Typography align='center' variant="h4" my={4} color="initial">Create product</Typography>
            <form>
                <Grid container rowSpacing={1} columnSpacing={2} p={1}>
                    <Grid xs={12} md={6} item={true}>
                        <TextField name='title' fullWidth value={productToCreate.title} id="outlined-basic" label="Title" variant="outlined" margin="normal"  required onChange={handleChange} />
                    </Grid>
                    <Grid xs={12} md={6} item={true}>
                        <TextField name='description' fullWidth value={productToCreate.description} id="outlined-basic" label="Description" variant="outlined" margin="normal" required onChange={handleChange} />
                    </Grid>
                    <Grid xs={12} md={6} item={true}>
                        <TextField fullWidth name='precio' value={productToCreate.precio} id="outlined-basic" label="Price" variant="outlined" margin="normal" required onChange={handleChange} />
                    </Grid>
                    <Grid xs={12} md={6} item={true}>
                        <TextField fullWidth name='thumbnailUrl' value={productToCreate.thumbnailUrl} id="outlined-basic" label="thumbnailUrl" variant="outlined" margin="normal" required onChange={handleChange} />
                    </Grid>
                    <Grid xs={12} md={6} item={true}>
                        <TextField fullWidth name='CategoryId' value={productToCreate.CategoryId} id="outlined-basic" label="CategoryId" variant="outlined" margin="normal" onChange={handleChange} />
                    </Grid>
                </Grid>
                <Button variant="contained" sx={{ mt: 4, width: 300, ml: 1}} onClick={createProduct}>Create product</Button>
            </form>
        </Box>
    )
}
