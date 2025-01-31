import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Grid} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import im1 from "../images/installM1.png";
import im2 from "../images/installM2.png";
// import im3 from "../images/installM3.png";

function InstallationMannual() {
  return (
    <Box className="section sectionTB">
      <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mb: 4}}>Installation Mannual</Typography>
      <Box sx={{textAlign: 'left', mb: 4}}>
        <Typography variant='h5' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', marginBottom: '10px', mb: 2}}>Car Parts</Typography>
        <Typography variant='body6' sx={{fontWeight: '500', color: '#5F6C72', fontFamily: '"Poppins", sans-serif', marginBottom: '10px', mb: 4, fontSize: '1.1rem'}}>Auto and Car Parts Manuals and pdf automotive manual instructions. Find the user manual you need for your automobile and more at Partsnmanuals. Also, Original electronic parts catalogs, workshop manuals, diagnostic adapters, and software for car parts and other vehicles.
        Visit our website and find service manuals, parts catalogs, parts manuals, diagnostic software, and more.</Typography>
      </Box>

      <Box sx={{textAlign: 'left'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', marginBottom: '10px', mb: 2}}>Other Products</Typography>
        <Typography variant='body6' sx={{fontWeight: '500', color: '#5F6C72', fontFamily: '"Poppins", sans-serif', marginBottom: '10px', mb: 4, fontSize: '1.1rem'}}>Do you need other Manuals? Then visit our website for more high-quality products to check our Parts Manuals, Parts Catalogs, Service Manuals, Diagnostic Equipment, 
        and find the best offers. We supply all EPC and Service manuals with the best deals. Buy Now and get the product. The link to download files will be available for you within 24 hours. Google Drive and/or Mega.nz is where the files can be stored.
        In conclusion, find Manuals and Catalogs of different categories:</Typography>
        <List>
          {[
            'Agricultural',
            'Industrial Equipment',
            'Busses',
            'Engines',
            'Forklift Trucks',
            'Truck Parts Catalogs',].map((text, index) => (
              <ListItem key={index} sx={{ alignItems: 'flex-start', padding: 0}}>
                <ListItemIcon sx={{ minWidth: '20px' }}>
                  <CircleIcon sx={{ fontSize: '7px', color: 'black', marginTop: '12px' }} />
                </ListItemIcon>
                <ListItemText primary={text} primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: '1.1rem', color: '#5F6C72', fontWeight: '500'}}/>
              </ListItem>
          ))}
        </List>
        <Typography variant='body6' sx={{fontWeight: '500', color: '#5F6C72', fontFamily: '"Poppins", sans-serif', marginBottom: '10px', mb: 4, fontSize: '1.1rem'}}>Do you want to contact us? Therefore we’re happy to answer any questions you have. Send us an email, or check our FAQ’s, where you might find your answer because we’ve listed the most asked questions there. Message us any questions or feedback you want to share.</Typography>
      </Box>

      <Box>
        <Typography variant='h5' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mt: 6}}>Spare Tyre & Tools</Typography>
        <Grid container spacing={4} sx={{ justifyContent: "center", mt: 1}}>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <img src={im1} alt="Spare Tyre" style={{borderRadius: '5px', maxWidth: '300px', maxHeight: '300px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} />
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#5F6C72", fontFamily: '"Poppins", sans-serif', mt: 2, fontSize: '1.1rem'}}>Spare Tyre</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <img src={im2} alt="Jack" style={{borderRadius: '5px', maxWidth: '300px', maxHeight: '300px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} />
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#5F6C72", fontFamily: '"Poppins", sans-serif', mt: 2, fontSize: '1.1rem'}}>Jack</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <img src={im1} alt="Lug Wrench" style={{borderRadius: '5px', maxWidth: '300px', maxHeight: '300px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} />
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#5F6C72", fontFamily: '"Poppins", sans-serif', mt: 2, fontSize: '1.1rem'}}>Lug Wrench</Typography>
          </Grid>
        </Grid>
      </Box>

    </Box>
  )
}

export default InstallationMannual;
