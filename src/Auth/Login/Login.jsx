import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {Link} from "react-router-dom";
import video from "../../images/home_video.gif";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Login-Details
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#121212", color: "#fff", backgroundSize: "cover", backgroundPosition: "center",}}>
      <video autoPlay loop muted style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1}}>
        <source src={video} type="video/mp4"/>
      </video>
      
      <Box sx={{ maxWidth: 500, borderRadius: 2, p: 4}}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{mb: 4}}>
          <Typography variant="h4" sx={{ fontWeight: "500", mb: 2, fontFamily: '"Poppins", sans-serif', cursor: "pointer"}}>Login</Typography>
          <Link to="/signup" className='link-c'><Typography variant="h4" sx={{ fontWeight: "500", color: "#fff", cursor: "pointer", fontFamily: '"Poppins", sans-serif',mb: 2}}>Sign Up</Typography></Link>
        </Grid>

        <TextField variant="outlined" fullWidth placeholder="Enter email" type="email" sx={{ mb: 4, backgroundColor: "#fff", borderRadius: 8, '& .MuiOutlinedInput-root': { borderRadius: '30px' }}} InputProps={{ startAdornment: (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mr: 1,}}>
            <PersonIcon sx={{color: '#911C14'}}/>
          </Box>
        ),}}/>

        <TextField variant="outlined" fullWidth placeholder="Enter password" type={showPassword ? "text" : "password"} sx={{ backgroundColor: "#fff", borderRadius: 8, '& .MuiOutlinedInput-root': { borderRadius: '30px' }}} InputProps={{ startAdornment: (
          <Box sx={{ minWidth: 0, padding: 0, marginRight: 1 }}disableRipple>
            <LockIcon sx={{color: '#911C14'}} />
          </Box>), endAdornment: (
          <Button onClick={togglePasswordVisibility} sx={{ minWidth: 0, padding: 0 }}>
            {showPassword ? ( <VisibilityOff style={{ color: "#911C14" }} /> ) : ( <Visibility style={{ color: "#911C14" }} />)}
          </Button>
        ),}}/>

        <Link to="/forgotpassword" className='link-c'><Typography variant="body1" sx={{ color: "#911C14", textAlign: "left", my: 3,cursor: "pointer", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', color: '#fff'}}>Forgot Password?</Typography></Link>
        <Button variant="contained" fullWidth sx={{ backgroundColor: "#911C14", color: "#fff", p: 1, borderRadius: 7, textTransform: "none", fontWeight: "bold", ":hover": { backgroundColor: "#b71c1c" }, fontSize: '1.5rem'}}>Login</Button>
      </Box>
    </Box>
  );
}

export default Login;
