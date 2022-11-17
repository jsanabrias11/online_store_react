import { ShoppingCar } from "./components/shoppingCar/ShoppingCar"
import Typography from '@mui/material/Typography'

export const ShoppingCarPage = () => {
  return (
    <>
      <Typography variant="h4" color="initial" align={"center"} sx={{m:4 }}>ShoppingCarPage</Typography>
      <ShoppingCar />    
    </>
  )
}
