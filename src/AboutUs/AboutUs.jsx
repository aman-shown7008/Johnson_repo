import React from 'react';
import { Typography, Box, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../images/aboutUs_logo/Frame 10.png";
import logo2 from "../images/aboutUs_logo/Frame 11.png";
import logo3 from "../images/aboutUs_logo/Frame 12.png";
import logo4 from "../images/aboutUs_logo/Frame 13.png";
import logo5 from "../images/aboutUs_logo/Frame 14.png";
import logo6 from "../images/aboutUs_logo/Frame 15.png";
import logo7 from "../images/aboutUs_logo/Frame 16.png";
import logo8 from "../images/aboutUs_logo/Frame 7.png";
import logo9 from "../images/aboutUs_logo/Frame 8.png";

function AboutUs() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    };

    const brands = [
        { src: logo1},
        { src: logo2},
        { src: logo3},
        { src: logo4},
        { src: logo5},
        { src: logo6},
        { src: logo7},
        { src: logo8},
        { src: logo9},
    ];
      

  return (
    <Box className="aboutUs section">
      <Box className="sectionTB">
        <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px'}}>About <span style={{color: '#810000'}}>Us</span></Typography>
        <Box sx={{textAlign: 'center', maxWidth: {xs: '100%', md: '80%'}}} mx="auto">
          <Typography variant='h6' sx={{ fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400'}}>Atren is a Canada-based leader in the automotive parts industry, providing high-quality components designed to enhance vehicle performance and reliability. We specialize in delivering innovative solutions that meet the needs of modern vehicles, ensuring durability and efficiency.</Typography><br/>
          <Typography variant='h6' sx={{ fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400'}}>With a commitment to excellence, Atren offers a wide range of products that cater to both domestic and international markets. Our focus on precision engineering, rigorous quality control, and customer satisfaction has positioned us as a trusted partner in the automotive sector. At Atren, we strive to drive innovation and performance across the automotive industry.</Typography>
        </Box>
      </Box>

      {/* Brand-section */}
      <Box textAlign="center">
      <Typography variant="h4" sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center',}}>Products from more than 500+ brands</Typography>
      <Box sx={{margin: "30px auto 0 auto" }}>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <Box key={index} sx={{ textAlign: "center", padding: "10px" }}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                <img src={brand.src} alt={brand.alt} style={{ width: "100%", height: "auto", maxWidth: "150px", margin: "0 auto",}}/>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
      </Box>

      <Box textAlign="center" className="sectionTB">
        <Typography variant="h4" sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center',}}>Atren</Typography>
        <Typography variant="body1" sx={{fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400', my: 5,  maxWidth: {xs: '100%', md: '80%'}, mx: 'auto'}}>Atren is a Canada-based leader in the automotive parts industry, specializing in delivering high-quality components designed for durability and performance. We take pride in:</Typography>
        <Box textAlign="left" mx="auto" sx={{maxWidth: {xs: '100%', md: '80%'}}}>
          <Typography variant="body1" sx={{fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400', mb: 2}}>- <strong>**Product Range**:</strong> Offering a wide selection of automotive parts, from engine components to braking systems, tailored to enhance vehicle reliability and efficiency.</Typography>
          <Typography variant="body1" sx={{fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400', mb: 2}}>- <strong>**Quality Control**:</strong> Our rigorous testing ensures every product meets the highest standards, making our parts ideal for modern automotive demands.</Typography>
          <Typography variant="body1" sx={{fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400', mb: 2}}>- <strong>**Global Reach**:</strong> Serving both domestic and international markets, Atren is trusted by a global network of customers.</Typography>
          <Typography variant="body1" sx={{fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400', mb: 2}}>- <strong>**Innovation**:</strong> We continuously innovate to provide advanced solutions that keep up with evolving automotive technologies.</Typography>
          <Typography variant="body1" sx={{fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400', mb: 4}}>- <strong>**Customer Commitmen**:</strong> Our focus on customer satisfaction drives us to offer unparalleled service and support.</Typography>
          <Typography variant='body1' sx={{fontSize: '1.1rem', fontFamily: '"Poppins", sans-serif', fontWeight: '400', mb: 2, textAlign: 'center'}}>Atren's dedication to excellence makes us a trusted partner in the global automotive industry, delivering performance-driven solutions to meet future challenges</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutUs
