import React, { useState } from 'react';
import { Typography, Box, IconButton, Grid, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow,} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/Add';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import cart1 from '../images/cart.png'; 
import { Link } from "react-router-dom";

function Cart() {
  const[quantity, setQuantity] = useState(0);
  const prodList = [
    { id: 1, name: 'RAYBESTOS R-Line - MGD318M - Rear Semi Metallic Pads', price: 70, originalPrice: 99, quantity: 1, image: cart1,},
    { id: 2, name: 'Brake Lubricant', price: 250, quantity: 3, image: cart1,},
  ];

  const handleDecre = () => {
    if(quantity > 0){
        setQuantity(quantity - 1);
    }
  }

  const handleIncre = () => {
    setQuantity(quantity + 1);
  }

  return (
    <Box className="section sectionTB" sx={{ padding: '20px' }}>
      {/* Cart Heading */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: '"Poppins", sans-serif', mb: 4,}}> Your Cart</Typography>

      <Grid container spacing={4}> 
        <Grid item xs={12} md={8}>
          <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', overflowX: 'auto', width: '100%'}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', mb: 2,}}>Shopping Cart</Typography>

            <Table>
              <TableHead>
                <TableRow sx={{backgroundColor: '#E4E7E9'}}>
                  <TableCell sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', fontSize: '1.1rem', color: '#475156'}}>Product</TableCell>
                  <TableCell sx={{fontWeight: 'bold',fontFamily: '"Poppins", sans-serif',textAlign: 'center', fontSize: '1.1rem', color: '#475156'}}>Price</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', textAlign: 'center', fontSize: '1.1rem', color: '#475156'}}>Quantity</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', textAlign: 'center', fontSize: '1.1rem', color: '#475156'}}>Subtotal</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              
              <TableBody>
                {prodList.map((prod) => (
                  <TableRow key={prod.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="error"><CancelOutlinedIcon /></IconButton>
                        <img src={prod.image} alt={prod.name} style={{ width: '50px', height: '50px', marginRight: '16px' }}/>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif' }}>{prod.name}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell sx={{ textAlign: 'center' }}>
                      <Typography sx={{ textDecoration: prod.originalPrice ? 'line-through' : 'none', color: '#475156', fontFamily: '"Poppins", sans-serif'}}>{prod.originalPrice ? `$${prod.originalPrice}` : ''}</Typography>
                      <Typography sx={{ color: '#475156', fontFamily: '"Poppins", sans-serif' }}>${prod.price}</Typography>
                    </TableCell>

                    <TableCell sx={{ textAlign: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e0e0e0',}}>
                        <IconButton onClick={handleDecre}><RemoveOutlinedIcon /></IconButton>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', margin: '0 8px', textAlign: 'center',}}>{quantity}</Typography>
                        <IconButton onClick={handleIncre}><AddIcon /></IconButton>
                      </Box>
                    </TableCell>
                    
                    <TableCell sx={{ textAlign: 'center' }}>
                      <Typography sx={{ fontFamily: '"Poppins", sans-serif' }}>${prod.quantity * prod.price}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, flexDirection: {xs: 'column', md: 'row'} }}>
              <Link to="/product">
                <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />} sx={{ fontFamily: '"Poppins", sans-serif', color: '#821810', border: '2px solid #821810', fontWeight: 'bold', marginBottom: {xs: '10px', md: '0px'}, width: '100%'}}>Return to Shop</Button>
              </Link>
              <Link to="/product">
                <Button variant="outlined" sx={{ fontFamily: '"Poppins", sans-serif', color: '#821810', border: '2px solid #821810', fontWeight: 'bold', width: '100%'}}>Update Cart</Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', mb: 2 }}>
            <Typography variant="h6" sx={{fontWeight: 'bold',fontFamily: '"Poppins", sans-serif', mb: 2,}}>Cart Totals</Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', color: '#5F6C72' }}>Sub-total</Typography>
              <Typography sx={{fontFamily: '"Poppins", sans-serif'}}>$320</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', color: '#5F6C72' }}>Shipping</Typography>
              <Typography sx={{fontFamily: '"Poppins", sans-serif'}}>Free</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', color: '#5F6C72' }}>Discount</Typography>
              <Typography sx={{fontFamily: '"Poppins", sans-serif'}}>$24</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', color: '#5F6C72' }}>Tax</Typography>
              <Typography sx={{fontFamily: '"Poppins", sans-serif'}}>$61.99</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, pt: 1, borderTop: '1px solid #E4E7E9' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}> Total</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>$357.99 USD</Typography>
            </Box>
            <Link to="/billinginfo">
              <Button variant="contained" fullWidth sx={{ py: 1, backgroundColor: '#821810', color: '#fff', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold','&:hover': { backgroundColor: '#b71c1c' }, fontSize: '1.1rem',mt: 2}} endIcon={<EastIcon />}>Proceed to Checkout</Button>
            </Link>
          </Box>

          <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', marginBottom: '16px',}}>Coupon Code</Typography>
            <TextField fullWidth placeholder="Email address" variant="outlined" sx={{ marginBottom: '16px', fontFamily: '"Poppins", sans-serif',}}/>
            <Button variant="contained" fullWidth sx={{ py: 1, backgroundColor: '#212121', color: '#fff', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', '&:hover': { backgroundColor: '#333' }, width: {xs: '100%', md:'60%'}, fontSize: '1.1rem'}}>Apply Coupon</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
