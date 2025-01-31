import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

function Download() {
  return (
    <Box className="section sectionTB">
      <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mb: 4, fontSize: {}}}>Download Resources</Typography>
      <Typography variant='h4' sx={{color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.2, mb: 0, textAlign: 'justify', fontSize: {xs: '1.6rem', md: '2.7rem'}}}>
        Download <span style={{fontWeight: 'bold'}}> Installation Mannual, Terms & Conditions & Warrant Policy</span> in PDF format in just one click.
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button variant="contained" sx={{backgroundColor: '#810000', fontWeight: "bold", fontSize: {xs: '1.6rem', md:"2rem"}, textTransform: "none", padding: {xs: '10px 40px', md: '15px 50px'}, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", mt: 4}}>Download <ArrowDownward sx={{ ml: 1, fontSize: '2rem' }}/></Button>
      </Box>
    </Box>
  )
}

export default Download
