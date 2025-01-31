import React from 'react'
import { Box, TextField, Button, Typography, Grid, } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
// import LockIcon from '@mui/icons-material/Lock';
import {Link} from "react-router-dom";

function ForgotPassword() {
  // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
  return (
   <Box sx={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#121212", color: "#fff", backgroundSize: "cover", backgroundPosition: "center",}}>
    <Box sx={{ maxWidth: 500, borderRadius: 2, p: 4}}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{mb: 4}}>
        <Typography variant="h4" sx={{ fontWeight: "500", mb: 2, fontFamily: '"Poppins", sans-serif', cursor: "pointer", textAlign: "center"}}>Forget Password</Typography>
      </Grid>

      <TextField variant="outlined" fullWidth placeholder="Enter email" type="email" sx={{ mb: 4, backgroundColor: "#fff", borderRadius: 8, '& .MuiOutlinedInput-root': { borderRadius: '30px' }}} InputProps={{ startAdornment: (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mr: 1,}}>
          <PersonIcon sx={{color: '#911C14'}}/>
        </Box>
      ),}}/>

      <Link to="/otp"><Button variant="contained" fullWidth sx={{ backgroundColor: "#911C14", color: "#fff", p: 1, borderRadius: 7, textTransform: "none", fontWeight: "bold", ":hover": { backgroundColor: "#b71c1c" }, fontSize: '1.5rem'}}>Recover</Button></Link>
      <Typography variant="body1" sx={{ textAlign: "center", my: 3,cursor: "pointer", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold'}}>Already have account? <Link to="/login" className='link-c'><span style={{color: "#911C14"}}>Sign In</span></Link></Typography>
      <Typography variant="body1" sx={{ textAlign: "center", my: 3,cursor: "pointer", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold'}}>Don’t have account? <Link to="/signup" className='link-c'><span style={{color: "#911C14"}}>Sign Up</span></Link></Typography>
    </Box>
  </Box>
  )
}

export default ForgotPassword
