import React, { useState } from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";
import part1 from "../images/parts1.jpg";
import part2 from "../images/parts2.jpg";
import part3 from "../images/parts3.jpg";
import part4 from "../images/parts4.jpg";
import part5 from "../images/parts5.jpg";
import part6 from "../images/parts6.jpg";
import part7 from "../images/parts7.jpg";
import part8 from "../images/parts8.jpg";
import part9 from "../images/parts9.jpg";
import part10 from "../images/parts10.jpg";
import part11 from "../images/parts11.jpg";
import part12 from "../images/parts12.jpg";
import { Translate } from '@mui/icons-material';

function DropdownProducts() {

  const categories = [
    { name: "Axle / Suspension", images: [part1, part2, part3, part4],},
    { name: "Engine Compartment", images: [part9, part10, part11, part12],},
    { name: "Exteriors", images: [part3, part4, part5, part6],},
  ];

  return (
    <Box className="section-bottom section" sx={{ padding: { xs: '10px 20px!important', md: '30px 80px 30px!important' }, textAlign: 'center', backgroundColor: '#F2F3F4',}}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#49494A', mb: 4, mt: 1 }}>Products</Typography>
      <Grid container>
        {categories.map((category, index) => (
          <Grid item xs={12} key={index} sx={{border: '1px solid #E0E0E0', mb: 4, p: 2, borderRadius: '10px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}}}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000', mb: 2, fontFamily: '"Poppins", sans-serif', position: 'relative', '&::before': {content: '""', position: 'absolute', top: '50%', left: '-18px', transform: 'translateY(-50%)', width: '8px', height: '25px', backgroundColor: '#821810', borderRadius:'2px', mx: 1}}}>{category.name}</Typography>
              <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', cursor: 'pointer', mb: {xs: 2, md: 0}}}>View all products</Typography>
            </Box>
            <Grid container spacing={2}>
              {category.images.map((image, imgIndex) => (
                <Grid item xs={12} sm={6} md={3} key={imgIndex}>
                  <Card sx={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', textAlign: 'left',}}>
                    <CardMedia component="img" height="140" image={image} alt={`Image ${imgIndex + 1}`}/>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000', fontFamily: '"Poppins", sans-serif',}}>M276 ECU Tune</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#5F7084', fontFamily: '"Poppins", sans-serif',}}>Start at C$1,425</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DropdownProducts;
