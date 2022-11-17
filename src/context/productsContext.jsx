import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../helpers/getProducts'


export const ProductsContext = createContext();

function ProductsContextProvider(props) {

    const [ products, setProducts] = useState([]);

    const [productToCreate, setProductToCreate] = useState({title : '', description : '' , precio : '', thumbnailUrl : '', CategoryId : ''});

    const [productToEdit, setProductToEdit] = useState({title : '', description : '', precio : '', thumbnailUrl : '', CategoryId : ''});

    
    const getDataProducts = async ()=>{
        const getProductsFunction = await getProducts();
        setProducts(getProductsFunction)
    }
    useEffect( () => {
        getDataProducts();        
    },[])

    // EDIT-DELETE PRODUCTS
    const deleteProduct = (idItem)=>{
        

        const deleteProductFunction = () => {
            const deleteProduct = products.filter(item => item.id !== idItem);
            const deleteProductShopcar = shoppingCar.filter(item => item.id !== idItem);
            setProducts(deleteProduct);
            setshoppingCar(deleteProductShopcar);
        }
        // Mensaje de confirmación
        const msjDelete = window.confirm('Are you sure you want to remove this product?');
        
        if (msjDelete) deleteProductFunction();
        
    }

    const editProduct = (IdProduct)=> {
        const editProduct = products.map(product => product.id == IdProduct ? { ...product, ...productToEdit } : product);
        setProducts(editProduct);
        setProductToEdit({title : '', description : '', precio : '', thumbnailUrl : '', CategoryId : ''});
    }

    const fillEditProduct = (product)=>{              
        setProductToEdit(product)        
    }
    
    // SHOPPING CARD
    const [shoppingCar, setshoppingCar] = useState([]);

    const addShoppingCar = (product)=>{
        
        if(shoppingCar.length !== 0){
            
            const addCantidad = ()=>{                          
                product.cantidad = 1;
                // product.precioTotal = product.precio * product.cantidad;
                setshoppingCar([...shoppingCar, product])
                
            }
    
            const updateCantidadProduct = () => {  
                    const editProduct = shoppingCar.map(item => item.id == product.id ? { ...item, cantidad : item.cantidad + 1 } : item);                    
                    setshoppingCar(editProduct);
            }        
            
            const findProduct = () => { 
                let contador = 0;
                shoppingCar.find(item => {
                    if(item.id === product.id){
                        contador = 1;                        
                    }                      
                })
                return contador;
            }

            const result = findProduct() === 0 ? addCantidad() : updateCantidadProduct()
            return;             
        }
        
        
        product.cantidad = 1;                   
        setshoppingCar([...shoppingCar, product]);                         
    }

    const increaseAmount = (product)=>{
        const editProduct = shoppingCar.map(item => item.id == product.id ? { ...item, cantidad : item.cantidad + 1 } : item);                    
        setshoppingCar(editProduct);
    }

    const decreaseAmount = (product)=>{
        if(product.cantidad !== 1){
            const editProduct = shoppingCar.map(item => item.id == product.id ? { ...item, cantidad : item.cantidad - 1 } : item);                    
            setshoppingCar(editProduct);
            return;
        }        
        const deleteItem = shoppingCar.filter(item => item.id !== product.id);
        setshoppingCar(deleteItem);        
    }

    const deleteCardItem = ( idItem ) => {
        const deleteItem = () => {
            const withItemToDelete = shoppingCar.filter(item => item.id !== idItem);
            setshoppingCar(withItemToDelete);
        }
        // Mensaje de confirmación
        const msjDelete = window.confirm('press OK to confirm product deletion');
        
        if (msjDelete) deleteItem();        
    }

    const carEmpty = () => {
        const msjEmptyCar = window.confirm('Do you want to delete the shopping cart?');
        if(msjEmptyCar) setshoppingCar([]);
    }

    const createProduct = (e) => {
        e.preventDefault();
        setProducts([...products, {id : +new Date(), ...productToCreate}]);
        setProductToCreate({title : '', description : '' , precio : '', thumbnailUrl : '', CategoryId : ''});
    }
    
    return (
        <ProductsContext.Provider value={{
            products,
            setProducts,
            shoppingCar,
            setshoppingCar,
            addShoppingCar,
            increaseAmount,
            decreaseAmount,
            deleteCardItem,
            carEmpty,
            createProduct,
            productToCreate,
            setProductToCreate,
            deleteProduct,
            editProduct,
            fillEditProduct,
            productToEdit,
            setProductToEdit
        }}>
            {props.children}

        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;