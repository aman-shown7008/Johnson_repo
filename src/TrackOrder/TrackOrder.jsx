import React from 'react';
import { Typography, Button, Box, TextField} from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from "react-router-dom";

function TrackOrder() {
  return (
    <Box className="sectionTB section" sx={{height: {xs: '80vh', md:'60vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Typography variant='h4' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', py: 1}}>Track Order</Typography>
      <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: '400', py: 1, color: '#5F6C72', width: {xs: '100%', md:'70%'}}}>To track your order please enter your order ID in the input field below and press the “Track Order” button. this was given to you on your receipt and in the confirmation email you should have received.</Typography>
      <Box sx={{display: 'flex', gap: {xs: '10px', md:'50px'}, my: 2, width: '100%', flexDirection: {xs: 'column', md: 'row'}}}>
        <Box>
          <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', color: '#191C1F'}}>Order ID</Typography>
          <TextField variant="outlined" fullWidth placeholder="ID..." type="email" sx={{mt: 1}}></TextField>
        </Box>
        <Box>
          <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', color: '#191C1F'}}>Billing Email</Typography>
          <TextField variant="outlined" fullWidth placeholder="Eamil Address" type="email" sx={{mt: 1}}></TextField>
        </Box>
      </Box>
      <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: '400', py: 2, color: '#5F6C72',}}>Order ID that we sended to your in your email address.</Typography>
      <Link to="/trackorderdetails"><Button variant="contained" sx={{backgroundColor: '#821810', fontWeight: 'bold', fontSize: '1.1rem', padding: '15px auto', width: {xs: '100%', md: '20%'}}} endIcon={ <EastIcon/>}>Track Order</Button></Link>
    </Box>
  )
}

export default TrackOrder;
