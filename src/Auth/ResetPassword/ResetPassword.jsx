import React, {useState} from 'react'
import { Box, TextField, Button, Typography, Grid, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {Link} from "react-router-dom";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
   <Box sx={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#121212", color: "#fff", backgroundSize: "cover", backgroundPosition: "center",}}>
    <Box sx={{ maxWidth: 500, borderRadius: 2, p: 4}}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{mb: 4}}>
        <Typography variant="h4" sx={{ fontWeight: "500", mb: 2, fontFamily: '"Poppins", sans-serif', cursor: "pointer"}}>Reset Password</Typography>
      </Grid>

      <TextField variant="outlined" fullWidth placeholder="Enter New password" type={showPassword ? "text" : "password"} sx={{ mb: 3,backgroundColor: "#fff", borderRadius: 8, '& .MuiOutlinedInput-root': { borderRadius: '30px' }}} InputProps={{ startAdornment: (
          <Box sx={{ minWidth: 0, padding: 0, marginRight: 1 }}disableRipple>
            <LockIcon sx={{color: '#911C14'}} />
          </Box>), endAdornment: (
          <Button onClick={togglePasswordVisibility} sx={{ minWidth: 0, padding: 0 }}>
            {showPassword ? ( <VisibilityOff style={{ color: "#911C14" }} /> ) : ( <Visibility style={{ color: "#911C14" }} />)}
          </Button>
        ),}}/>

      <TextField variant="outlined" fullWidth placeholder="Confirm password" type={showPassword ? "text" : "password"} sx={{ mb: 5,backgroundColor: "#fff", borderRadius: 8, '& .MuiOutlinedInput-root': { borderRadius: '30px' }}} InputProps={{ startAdornment: (
          <Box sx={{ minWidth: 0, padding: 0, marginRight: 1 }}disableRipple>
            <LockIcon sx={{color: '#911C14'}} />
          </Box>), endAdornment: (
          <Button onClick={togglePasswordVisibility} sx={{ minWidth: 0, padding: 0 }}>
            {showPassword ? ( <VisibilityOff style={{ color: "#911C14" }} /> ) : ( <Visibility style={{ color: "#911C14" }} />)}
          </Button>
        ),}}/>

      <Link to="/login"><Button variant="contained" fullWidth sx={{ backgroundColor: "#911C14", color: "#fff", p: 1, borderRadius: 7, textTransform: "none", fontWeight: "bold", ":hover": { backgroundColor: "#b71c1c" }, fontSize: '1.5rem'}}>Save</Button></Link>
    </Box>
  </Box>
  )
}

export default ResetPassword;
