import React from 'react';
import { Typography, Button, Box } from "@mui/material";
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import EastIcon from '@mui/icons-material/East';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";

function SuccessfulMessage() {
  return (
    <Box className="sectionTB section" sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'column',textAlign: 'center', py: 4, maxWidth: '650px', margin: '0px auto', height: '60vh'}}>
      <CheckCircleTwoToneIcon sx={{color: '#2DB224', fontSize: '100px'}}/>
      <Typography variant='h5' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', py: 2}}>Your order is successfully place</Typography>
      <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', color: '#5F6C72', fontWeight: '500'}}>Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</Typography>
      <Box sx={{display: 'flex', justifyContent: 'space-between', my: 3, gap: {xs: '15px', md: '30px'}, flexDirection: {xs: 'column', md: 'row'}}}>
        <Link to="/"><Button variant='outlined' sx={{border: '2px solid #821810', color: '#821810', py: 1, fontWeight: 'bold', px: 2, fontSize: '1.1rem'}} startIcon={ <DashboardIcon/> }>Go to Dashboard</Button></Link>
        <Link to="/trackorder"><Button variant="contained" sx={{backgroundColor: '#821810', fontWeight: 'bold', fontSize: '1.1rem', py: 1}} endIcon={ <EastIcon/>}>View Order</Button></Link>
      </Box>
    </Box>
  )
}

export default SuccessfulMessage;
