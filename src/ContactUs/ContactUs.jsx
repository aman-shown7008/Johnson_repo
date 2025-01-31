import React from 'react';
import { Typography, Box, IconButton, Grid, TextField, Button} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function ContactUs() {
  return (
    <Box className="contactUs">
      <Box className="section sectionTB">
        <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mb: 4}}>Contact <span style={{color: '#810000'}}>Us</span></Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{maxWidth: '70%'}}>
            <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: '500'}}>Get Started</Typography>
            <Typography sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize: {xs: '2.5rem', md: '3.6rem'}}}>Get in touch with us. We're here to assist you.</Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: '30px'}}>
            <a href="https://www.facebook.com/johnsonmotorsportss" rel='noreferrer' target="_blank">
              <IconButton sx={{ border: "1px solid #B7B7B7", color: "#821810", "&:hover": { backgroundColor: "#821810", color: "#fff",},}}>
                <FacebookIcon />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/johnson_motorsports/" rel='noreferrer' target="_blank">
              <IconButton sx={{ border: "1px solid #B7B7B7", color: "#821810", "&:hover": { backgroundColor: "#821810", color: "#fff",},}}>
                <InstagramIcon />
              </IconButton>
            </a>
            <a href="https://www.twitter.com" rel='noreferrer' target="_blank">
              <IconButton sx={{ border: "1px solid #B7B7B7", color: "#821810", "&:hover": { backgroundColor: "#821810", color: "#fff", },}}>
                <TwitterIcon />
              </IconButton>
            </a>
          </Box>
        </Box>
        <Grid container spacing={2} sx={{marginTop: '20px'}}>
          <Grid item xs={12} md={4}>
          <TextField fullWidth variant='outlined' label="Your Name" sx={{fontFamily: '"Poppins", sans-serif'}}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth variant='outlined' label="Email Address" sx={{fontFamily: '"Poppins", sans-serif'}}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth variant='outlined' label="Phone Number (optional)" sx={{fontFamily: '"Poppins", sans-serif'}}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={4} variant='outlined' label="Message" sx={{fontFamily: '"Poppins", sans-serif'}}/>
          </Grid>
          <Button variant='contained' sx={{ backgroundColor: "#000", color: "#fff", fontFamily: '"Poppins", sans-serif', fontWeight: "bold", textTransform: "none", marginTop: "20px", padding: "10px 20px", "&:hover": { backgroundColor: "#333", }, marginLeft: '16px', fontSize: '1.1rem'}}>Leave us a Message →</Button>
        </Grid>
      </Box>
      <Box sx={{padding: '50px auto'}}>
        <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mb: 4}}>Find us on <span style={{color: '#810000'}}>Map</span></Typography>
        <Box sx={{position: 'relative', paddingBottom: {xs: '50%', md: '30%'}, height: '0', overflow: 'hidden', borderRadius: '10px', boxShadow: "0 4px 10px rgba(0,0,0,0.1)",}}>
          <iframe title="Googel Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.01199891585!2d72.741098728617!3d19.082197839165334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4f4ddf29ed%3A0x2c07e2d77b47cdb6!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1688653852263!5m2!1sen!2sin" width="100%" height="100%"
          style={{ border: 0, position: "absolute", top: 0, left: 0, }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
      </Box>
      <Box className="section" sx={{background: 'linear-gradient(to right, #FFFFFF, #FFEBEA)'}}>
        <Grid container spacing={2} sx={{padding: '50px 0'}}>
          <Grid item xs={12} md={4} sx={{color: '#821810'}}>
            <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif', mb: 2}}>Contact Info</Typography>
            <Typography variant='h5' sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', width: {xs: 'auto', md: '300px'}}}>We are always happy to assist you</Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{color: '#821810'}}>
            <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold'}}>Email Address</Typography><br/>
            <Typography sx={{mt: 1}}><HorizontalRuleIcon/></Typography>
            <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold'}}>help@atren.com</Typography><br/>
            <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif',  width: {xs: 'auto', md: '300px'}}}>Assistance hours: Monday - Friday 6 am to 8 pm EST</Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{color: '#821810'}}>
            <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold'}}>Number</Typography><br/>
            <Typography sx={{mt: 1}}><HorizontalRuleIcon/></Typography>
            <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold'}}>42t75725331</Typography><br/>
            <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif',  width: {xs: 'auto', md: '250px'}}}>Assistance hours: Monday - Friday 6 am to 8 pm EST</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ContactUs;