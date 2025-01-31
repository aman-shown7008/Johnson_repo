import React from 'react';
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function OTP() {
  return (
    <Box 
      sx={{ 
        height: "80vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#121212", 
        color: "#fff", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ 
          maxWidth: 400, 
          borderRadius: 2, 
          p: 4, 
          backgroundColor: "#1e1e1e",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)"
        }}
      >

        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          {[...Array(4)].map((_, index) => (
            <Grid item key={index}>
              <TextField 
                variant="outlined" 
                inputProps={{ 
                  maxLength: 1, 
                  style: { textAlign: "center", fontSize: "1.5rem" } 
                }} 
                sx={{ 
                  width: 60, 
                  height: 60, 
                  backgroundColor: "#fff", 
                  borderRadius: 1, 
                  '& .MuiOutlinedInput-root': { borderRadius: 2 }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default OTP;
