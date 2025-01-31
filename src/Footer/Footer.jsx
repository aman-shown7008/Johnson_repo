import React from 'react';
import { Box, Typography, Grid, IconButton } from "@mui/material";
import logo from "../images/logo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box className="section" sx={{backgroundColor: "#000", color: "#fff", padding: "20px"}}>
      <Grid container  spacing={3}>
        <Grid item xs={12} sm={6} md={12}>
          <Box sx={{ display: "flex", justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}}}>
            <Box component="img" src={logo} alt="Logo" sx={{ maxHeight: "120px", objectFit: 'contain' }}/>
            <Box sx={{ display: "flex", gap: "20px", alignItems: 'flex-start', borderBottom: '1px solid #EDEDED', flexDirection: {xs: 'column', md: 'row'}}}> 
              <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: 'center', gap: "10px", flexDirection: 'column' }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: "10px" }}>
                  <LocationOnIcon sx={{color: '#ED0000', mb: 2}}/>
                  <Typography sx={{fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem'}}>35 Chem. de Cawood, Danford Lake,<br/> QC J0X 1P0</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: "10px" }}>
                  <LocationOnIcon sx={{color: '#ED0000', mb: 2}}/>
                  <Typography sx={{fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem'}}>970 Quebec Rte 105, Venosta,<br/>Quebec J0X 2C0</Typography>
                </Box>
              </Box>
              <Box sx={{marginBottom: {xs: '10px', md: '0px'}}}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 1 }}>
                  <PhoneEnabledIcon sx={{color: '#ED0000'}}/>
                  <Typography component='a' href="tel:+018194672009" sx={{fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem', color: '#fff', textDecoration: 'none'}}>+01-819-467-2009</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 3 }}>
                  <EmailIcon sx={{color: '#ED0000'}}/>
                  <Typography component='a' href="mailto:info@johnsonautowreckersplus.com" sx={{fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem', color: '#fff', textDecoration: 'none'}}>info@johnsonautowreckersplus.com</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: '"Poppins", sans-serif'}}>Pages</Typography>
          <Link to="/" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff',}}>Home</Typography></Link>
          <Link to="/services" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff',}}>Services</Typography></Link>
          <Link to="/faq" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff',}}>FAQ</Typography></Link>
          <Link to="/aboutus" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff',}}>About Us</Typography></Link>
          <Link to="/contactus" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff',}}>Contact Us</Typography></Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: '"Poppins", sans-serif'}}>Resources</Typography>
          <Link to="/installationmannual" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Installation Manual</Typography></Link>
          <Link to="/blogs" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Blogs</Typography></Link>
          <Link to="/termsconditions" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Terms & Conditions</Typography></Link>
          <Link to="/warrantpolicy" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Warrant Policy</Typography></Link>
          <Link to="/download" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Download</Typography></Link>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: '"Poppins", sans-serif'}}>Models</Typography>
          <Link to="/dropdownproducts" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Tesla</Typography></Link>
          <Link to="/dropdownproducts" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Nissan</Typography></Link>
          <Link to="/dropdownproducts" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>BMW</Typography></Link>
          <Link to="/dropdownproducts" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Lamborghini</Typography></Link>
          <Link to="/dropdownproducts" className='link-c'><Typography sx={{fontFamily: '"Poppins", sans-serif', color: '#fff'}}>Chevrolet</Typography></Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: '"Poppins", sans-serif'}}>Follow Us</Typography>
          <Box sx={{display: "flex", justifyContent: "center",gap: "10px" }}>
            <a href="https://www.facebook.com/johnsonautowreckersplus" rel='noreferrer' target="_blank">
              <IconButton sx={{ color: "#fff" }}>
                <FacebookRoundedIcon />
              </IconButton>
            </a>
            <a href="https://www.twitter.com" rel='noreferrer' target="_blank">
              <IconButton sx={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/johnson_auto_wreckers_plus/" rel='noreferrer' target="_blank">
              <IconButton sx={{ color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
            </a>
          </Box>
        </Grid>
      </Grid>
      <Typography sx={{ mt: 3, borderTop: "1px solid #333", py: 2, fontFamily: '"Poppins", sans-serif'}}>© 2025 xyz. All Rights Reserved</Typography>
    </Box>
  );
}

export default Footer;
