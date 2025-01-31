import React from 'react';
import { Typography, Box,  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, Checkbox,RadioGroup} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import cart1 from '../images/cart.png'; 
import cash from "../images/CurrencyDollar.png";
import venmo from "../images/venmo.png";
import paypal from "../images/paypal.png";
import amazonPay from "../images/amazonPay.png";
import credit from "../images/CreditCard.png";
import { Link } from "react-router-dom";

const BillingInfo = () => {
    // const[quantity, setQuantity] = useState(0);
    const prodList = [
      { id: 1, name: 'RAYBESTOS R-Line - MGD318M - Rear Semi Metallic Pads', price: 70, originalPrice: 99, quantity: 1, image: cart1,},
      { id: 2, name: 'Brake Lubricant', price: 250, quantity: 3, image: cart1,},
    ];
  
    // const handleDecre = () => {
    //   if(quantity > 0){
    //       setQuantity(quantity - 1);
    //   }
    // }
  
    // const handleIncre = () => {
    //   setQuantity(quantity + 1);
    // }

  return (
    <Box className="section sectionTB">
      <Grid container spacing={2}> 
        <Grid item xs={12} md={8}>
          <Box sx={{padding: '16px'}}>
            <Typography variant='h6' sx={{fontWeight: 'bold', mb: 2, fontFamily: '"Poppins", sans-serif',}}>Billing Information</Typography>
            {/* Form-Section */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                {/* <Typography variant='body6'>User Name</Typography> */}
                <TextField fullWidth label="First Name" variant='outlined' required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
              </Grid>
              <Grid item xs={12} md={3}>
                {/* <Typography variant='body6'>Last Name</Typography> */}
                <TextField fullWidth label="Last Name" variant='outlined' required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <Typography variant='body6'>Company Name (Optional)</Typography> */}
                <TextField fullWidth label="Company Name" variant='outlined' required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
              </Grid>
              <Grid item xs={12}>
                {/* <Typography variant='body6'>Address</Typography> */}
                <TextField fullWidth label="Address" variant='outlined' required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth> 
                  <InputLabel sx={{ fontFamily: '"Poppins", sans-serif' }}>Country</InputLabel>
                  <Select>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontFamily: '"Poppins", sans-serif' }}>Region/State</InputLabel>
                  <Select>
                    <MenuItem value="CA">California</MenuItem>
                    <MenuItem value="TX">Texas</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontFamily: '"Poppins", sans-serif' }}>City</InputLabel>
                    <Select>
                      <MenuItem value="LA">Los Angeles</MenuItem>
                      <MenuItem value="NY">New York</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField fullWidth label="Zip Code" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email" variant="outlined" required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
              </Grid>
             <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone Number" variant="outlined" required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
              </Grid>
              <Grid item xs={12}> 
                <FormControlLabel control={<Checkbox/> } label="Ship into different address" sx={{"& .MuiFormControlLabel-label": {fontFamily: '"Poppins", sans-serif'}}}/>
              </Grid>
            </Grid>

            <Box sx={{border: "1px solid #e0e0e0", borderRadius: '8px', padding: '16px', mt: 4}}>
              <Typography variant='h6' sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', mb: 2}}>Payment Option</Typography>
              <FormControl>
                <RadioGroup row sx={{display: 'flex', justifyContent: 'space-between', gap: '30px', flexDirection: {xs: 'column', md: 'row'}}}>
                  <FormControlLabel value="Cash on Delivery" control={<Radio sx={{ '&.Mui-checked': { color: '#FA8232' }}}/>} label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" , flexDirection: 'column'}}>
                      <img src={cash} alt="cashOnDelivery" width={24} height={24}/>
                      Cash On Delivery
                    </Box>} sx={{"& .MuiFormControlLabel-label": {fontFamily: '"Poppins", sans-serif'}}}/>
                  <FormControlLabel value="Venmo" control={<Radio sx={{ '&.Mui-checked': { color: '#FA8232' }}}/>} label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" , flexDirection: 'column'}}>
                      <img src={venmo} alt="venmo" width={24} height={24}/>
                      Venmo
                    </Box>} sx={{"& .MuiFormControlLabel-label": {fontFamily: '"Poppins", sans-serif'}}}/>
                  <FormControlLabel value="PayPal" control={<Radio sx={{ '&.Mui-checked': { color: '#FA8232' }}}/>} label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" , flexDirection: 'column'}}>
                      <img src={paypal} alt="paypal" width={24} height={24}/>
                      Paypal
                    </Box>} sx={{"& .MuiFormControlLabel-label": {fontFamily: '"Poppins", sans-serif'}}}/>
                  <FormControlLabel value="Amazon Pay" control={<Radio sx={{ '&.Mui-checked': { color: '#FA8232' }}}/>} label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" , flexDirection: 'column'}}>
                      <img src={amazonPay} alt="amazonPay" width={24} height={24}/>
                      Amazon Pay
                    </Box>} sx={{"& .MuiFormControlLabel-label": {fontFamily: '"Poppins", sans-serif'}}}/>
                  <FormControlLabel value="Debit/Credit Card" control={<Radio sx={{ '&.Mui-checked': { color: '#FA8232' }}}/>} label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" , flexDirection: 'column'}}>
                      <img src={credit} alt="debitCard" width={24} height={24}/>
                      Debit/Credit Card
                    </Box>} sx={{"& .MuiFormControlLabel-label": {fontFamily: '"Poppins", sans-serif'}}}/>
                </RadioGroup>
              </FormControl>
              
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Name On Card" variant="outlined" required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
                </Grid>
                <Grid item xs={12} >
                  <TextField fullWidth label="Card Number" variant="outlined" required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="DD/YY" variant="outlined" required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="CVC" variant="outlined" required InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{mt: 4}}>
              <Typography variant='h6' sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>Additional Information</Typography>
              <Typography sx={{my: 1, fontFamily: '"Poppins", sans-serif'}}>Order Notes <span style={{color: '#77878F'}}>(Optional)</span></Typography>
              <TextField fullWidth multiline rows={4} variant='outlined' label="Notes about your order, e.g. special notes for delivery" InputLabelProps={{ sx: { fontFamily: '"Poppins", sans-serif' },}}/>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', mb: 2, m: 2 }}>
            <Typography variant="h6" sx={{fontWeight: 'bold',fontFamily: '"Poppins", sans-serif', mb: 2,}}>Order Summary</Typography>
            
            {prodList.map((prod, idx) => (
              <Box sx={{display: 'flex', gap: '10px', my: 2}}>
                <img src={prod.image} alt={prod.name} style={{ width: '70px', height: '70px', marginRight: '16px' }}/>
                <Box>
                  <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: '500'}}>{prod.name}</Typography>
                  <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif', color: '#5F6C72'}}>2 x <span style={{color: '#821810', fontWeight: 'bolder'}}>$70</span></Typography>
                </Box>
              </Box>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', color: '#5F6C72' }}>Sub-total</Typography>
              <Typography sx={{fontFamily: '"Poppins", sans-serif'}}>$320</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', color: '#5F6C72' }}>Shipping</Typography>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif'}}>Free</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', color: '#5F6C72' }}>Discount</Typography>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif'}}>$24</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', color: '#5F6C72' }}>Tax</Typography>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif'}}>$61.99</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, pt: 1, borderTop: '1px solid #E4E7E9' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}> Total</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>$357.99 USD</Typography>
            </Box>
            <Link to="/successfulmessage">
              <Button variant="contained" fullWidth sx={{ py: 1, backgroundColor: '#821810', color: '#fff', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold','&:hover': { backgroundColor: '#b71c1c' }, fontSize: '1.1rem',mt: 2}} endIcon={<EastIcon />}>Place order</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BillingInfo
