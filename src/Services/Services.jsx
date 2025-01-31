import React from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";
import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";

const services = [
    { title: "Service 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae.", image: service1, },
    { title: "Service 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae.", image: service2, },
    { title: "Service 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae.", image: service3, },
    { title: "Service 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae.", image: service1, },
    { title: "Service 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae.", image: service2, },
    { title: "Service 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nisi vitae.", image: service3, },
  ];

function Services() {
  return (
    <Box className="section service sectionTB">
      <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mb: 4}}>Servi<span style={{color: '#810000'}}>ces</span></Typography>

      <Grid container spacing={6}>
        {services.map((service, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{borderRadius: 3, boxShadow: 4, overflow: 'hidden', position: 'relative', "&:hover": { transform: "scale(1.02)", transition: "transform 0.3s ease",}}}>
              <CardMedia component="img" height="200" image={service.image} alt={service.title} />
              <CardContent sx={{position: "relative", paddingBottom: "16px !important"}}>
                <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1 }}>{service.title}</Typography>
                <Typography variant='body6' sx={{ mb: 2 }}>{service.description}</Typography><br/>
                <Typography sx={{ color: "#000", textTransform: "none", fontWeight: "500", fontSize: '1.2rem', fontFamily: '"Poppins", sans-serif', mt: 1, textDecoration: 'underline'}}>Check it out &gt;&gt;&gt;</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Services;
