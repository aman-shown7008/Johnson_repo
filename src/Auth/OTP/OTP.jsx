import React from 'react';
import { Box, TextField, Button, Typography, Grid, } from "@mui/material";
import { Link } from "react-router-dom";

function OTP() {
  return (
    <Box sx={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#121212", color: "#fff", backgroundSize: "cover", backgroundPosition: "center",}}>
    <Box sx={{ maxWidth: 500, borderRadius: 2, p: 4}}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{mb: 4}}>
        <Typography variant="h4" sx={{ fontWeight: "500", mb: 2, fontFamily: '"Poppins", sans-serif', cursor: "pointer", textAlign: "center"}}>One Time Password</Typography>
      </Grid>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        {[...Array(4)].map((_, idx) => (
          <Grid item key={idx}>
            <TextField  variant="outlined" inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: "1.5rem" }}} sx={{ width: 60, height: 67, backgroundColor: "#fff", borderRadius: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 }}}/>
          </Grid>
        ))}
      </Grid>

      <Link to="/resetpassword"><Button variant="contained" fullWidth sx={{ backgroundColor: "#911C14", color: "#fff", p: 1, borderRadius: 7, textTransform: "none", fontWeight: "bold", ":hover": { backgroundColor: "#b71c1c" }, fontSize: '1.5rem'}}>Recover</Button></Link>
      <Typography variant="body1" sx={{ textAlign: "center", my: 3,cursor: "pointer", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold'}}>Didn’t receive the code? <Link to="/login" className='link-c'><span style={{color: "#911C14", textDecoration: 'underline'}}>Resend Again</span></Link></Typography>
    </Box>
  </Box>
  )
}

export default OTP;
