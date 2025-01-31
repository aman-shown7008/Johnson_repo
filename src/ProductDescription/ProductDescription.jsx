import React, {useState} from 'react';
import { Typography, Button, Box, Grid, Card, CardMedia, IconButton, TextField, CardContent, Avatar, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import prodDesc1 from "../images/prodDesc.png";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Cards from "../images/cards.png";
import prodDetail from "../images/relatedProduct.png";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CoatingIcon from '@mui/icons-material/Wallpaper';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from "react-router-dom";

const products = [
    {
      category: 'Related Product',
      items: [
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
      ],
    },
    {
      category: 'Interiors',
      items: [
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
      ],
    },
    {
      category: 'Lighting',
      items: [
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
      ],
    },
    {
      category: 'Featured Products',
      items: [
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
        { image: prodDetail, title: 'Lorem Ipsum', price: '$1,500' },
      ],
    },
];

const highlights = [
    {
      icon: <PrecisionManufacturingIcon />,
      title: 'Grade',
      description: 'Standard/OE',
    },
    {
      icon: <DirectionsCarIcon />,
      title: 'Driver Profile',
      description: 'Daily Driver',
    },
    {
      icon: <DesignServicesIcon />,
      title: 'Precision',
      description: 'Original Fit\nFitment on par with OEM\nOE Quality Assurance\nExact Size & Dimensions',
    },
    {
      icon: <CoatingIcon />,
      title: 'Finishing',
      description: 'Coated\nTreated at OEM Specifications\nCorrosion Prevention\nReduced Wear Activator',
    },
    {
      icon: <DesignServicesIcon />,
      title: 'Conception',
      description: 'Identical Factory Design\nDaily Commute Tested\nAll Weather Driven',
    },
];
function ProductDescription() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (type) => {
      if (type === "increment") {
        setQuantity(quantity + 1);
      } else if (type === "decrement" && quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

  return (
    <Box className="section sectionTB">
      <Typography variant='h5' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'left', my: 4}}><span style={{color: '#810000'}}>RAYBESTOS R-Line - </span>780073R - Vented Front Disc Brake Roto</Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" image={prodDesc1} alt="RAYBESTOS R-Line - 780073R" height="410px" width="200px" sx={{objectFit: 'contain'}}/>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
           <Box sx={{alignItems: {xs: 'flex-start', md:"center"}}}>
             <Box sx={{ display: "flex", aalignItems: {xs: 'flex-start', md:"center"}, flexDirection: {xs: 'column', md: 'row'}}}>
              <Box>
               <StarIcon sx={{ color: "#821810", fontSize: "20px" }} />
               <StarIcon sx={{ color: "#821810", fontSize: "20px" }} />
               <StarIcon sx={{ color: "#821810", fontSize: "20px" }} />
               <StarIcon sx={{ color: "#821810", fontSize: "20px" }} />
               <StarIcon sx={{ color: "#821810", fontSize: "20px" }} />
               </Box>
               <Typography variant="body6" sx={{ marginLeft: "4px", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>4.6 Star Rating <span style={{fontWeight: '500', color: '#5F6C72'}}>(21,671 User feedback)</span></Typography><br/>
             </Box>
             <Typography variant='h6' sx={{ mt: 1, fontFamily: '"Poppins", sans-serif', color: '#191C1F'}}>RAYBESTOS R-Line - 780073R - Vented Front Disc Brake Rotor</Typography>
           </Box>
           <FavoriteIcon sx={{fontSize: '2rem'}}/>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'},mt: 2}}>
            <Box>
              <Typography variant="body6" sx={{ marginLeft: "4px", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Part: <span style={{fontWeight: '500', color: '#5F6C72'}}>(A264671)</span></Typography><br/>
              <Typography variant="body6" sx={{ marginLeft: "4px", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Brand: <span style={{fontWeight: '500', color: '#5F6C72'}}>(RAYBESTOS)</span></Typography><br/>
            </Box>
            <Box>
              <Typography variant="body6" sx={{ marginLeft: "4px", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Availability: <span style={{fontWeight: '500', color: '#2DB224'}}> In Stock </span></Typography><br/>
              <Typography variant="body6" sx={{ marginLeft: "4px", fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Category: <span style={{fontWeight: '500', color: '#5F6C72'}}>(Axle / Suspension)</span></Typography><br/>
            </Box>
          </Box>
          <Box sx={{display: 'flex', mt: 1}}>
           <Typography variant='h6' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif'}}>$1699<span style={{textDecoration:'line-through', color: '#77878F', marginLeft: '5px'}}>$1999</span></Typography>
           <Typography variant='body1' sx={{padding: ' 5px 10px 5px 10px', backgroundColor: '#43D340', fontFamily: '"Poppins", sans-serif', fontWeight: '500', borderRadius: '5px', ml: 1}}>21% OFF</Typography>
          </Box>
          <Box sx={{paddingTop: '30px'}}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #ccc", borderRadius: "4px", padding: "4px 8px",}}>
                  <Button variant="text" onClick={() => handleQuantityChange("decrement")} sx={{ minWidth: "auto", padding: "0 8px", fontSize: '1.4rem', color: '#191C1F' }}>-</Button>
                  <Typography variant="body1" sx={{ margin: "0 8px", fontFamily: '"Poppins", sans-serif' }}>
                    {quantity}
                  </Typography>
                  <Button variant="text" onClick={() => handleQuantityChange("increment")} sx={{ minWidth: "auto", padding: "0 8px", color: '#191C1F', fontSize: '1.4rem'}}>+</Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Link to="/cart"><Button variant="contained" sx={{border: '2px solid #821810',backgroundColor: '#821810', py: 1, fontSize: '1.1rem'}} fullWidth endIcon={<ShoppingCartIcon />}>Add to Cart</Button></Link>
              </Grid>
              <Grid item xs={12} md={5}>
                <Link to="/billinginfo"><Button variant="outlined" sx={{border: '2px solid #821810', color: '#821810', fontWeight: 'bold', py: 1, fontSize: '1.1rem'}} fullWidth>Buy Now</Button></Link>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex",  mt: 3, gap: 1, justifyContent: 'space-between',  flexDirection: {xs: 'column', md: 'row'}}}>
              <Box sx={{display: 'flex', gap: 2, flexDirection: {xs: 'column', md: 'row'}}}>
                <Box sx={{ display: "flex", alignItems: "center",  color: '#475156' }}>
                  <IconButton sx={{padding: '0 5px 0 0'}}>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <Typography variant="body6">Add to Wishlist</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", color: '#475156'}}>
                  <IconButton sx={{padding: '0 5px 0 0'}}>
                    <CompareArrowsIcon />
                  </IconButton>
                  <Typography variant="body6" sx={{fontFamily: '"Poppins", sans-serif'}}>Add to Compare</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", color: '#475156'}}>
                <Typography variant="body6" sx={{fontFamily: '"Poppins", sans-serif'}}>Share product:</Typography>
                  <IconButton sx={{padding: '0 0 0 5px'}}>
                    <ContentCopyIcon />
                  </IconButton>
                  <IconButton sx={{padding: '0 0 0 5px'}}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton sx={{padding: '0 0 0 5px'}}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton sx={{padding: '0 0 0 5px'}}>
                    <PinterestIcon />
                  </IconButton>
              </Box>
            </Box>
            <Box sx={{ border: "1px solid #E4E7E9", borderRadius: "4px", padding: "16px", mt: 3, textAlign: "left",}}>
              <Typography variant="body6" sx={{ mb: 1, fontFamily: '"Poppins", sans-serif', color: '#191C1F' }}>100% Guarantee Safe Checkout</Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 1}}>
                <img src={Cards} alt="Visa" style={{ width: 400 }}/>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Typography variant='h4' sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', mt: 4}}>Vehicle Fitment</Typography><br/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField fullWidth variant='outlined' label="Year" sx={{fontFamily: '"Poppins", sans-serif', "& .MuiOutlinedInput-root": {borderRadius: 0,  "& fieldset": { border: "none"}, "&:after": { content: '""', display: "block", width: "100%", height: "2px", backgroundColor: "#CACACA",  position: "absolute", bottom: 0, left: 0,},},}} InputLabelProps={{sx: {fontFamily: '"Poppins", sans-serif'}}}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth variant='outlined' label="Brand" sx={{fontFamily: '"Poppins", sans-serif', "& .MuiOutlinedInput-root": {borderRadius: 0,  "& fieldset": { border: "none"}, "&:after": { content: '""', display: "block", width: "100%", height: "2px", backgroundColor: "#CACACA",  position: "absolute", bottom: 0, left: 0,},},}} InputLabelProps={{sx: {fontFamily: '"Poppins", sans-serif'}}}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth variant='outlined' label="Model" sx={{fontFamily: '"Poppins", sans-serif', "& .MuiOutlinedInput-root": {borderRadius: 0,  "& fieldset": { border: "none"}, "&:after": { content: '""', display: "block", width: "100%", height: "2px", backgroundColor: "#CACACA",  position: "absolute", bottom: 0, left: 0,},},}} InputLabelProps={{sx: {fontFamily: '"Poppins", sans-serif'}}}/>
        </Grid>
        <Button variant='contained' sx={{ backgroundColor: "#000", color: "#fff", fontFamily: '"Poppins", sans-serif', fontWeight: "bold", textTransform: "none", marginTop: "20px", padding: "10px 50px", "&:hover": { backgroundColor: "#333", }, marginLeft: '16px', fontSize: '1.1rem'}}>Verify →</Button>
      </Grid>

      <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', gap: '2', mt: {xs: 5, md: 7}, maxWidth: '600px', margin: '0 auto', p: 2,}}>
        <Typography variant='h5' sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', whiteSpace: 'nowrap', mr: 4}}>Check Delivery</Typography>
        <TextField fullWidth variant='outlined' label="Enter Postal Code" sx={{"& .MuiOutlinedInput-root": { borderRadius: '50px', paddingRight: 0, "& fieldset": {border: 'none'}}}} InputProps={{ style: {backgroundColor: '#E1E8F5', border: 'none'}}} InputLabelProps={{sx: {fontFamily: '"Poppins", sans-serif'}}}/>
      </Box>

      <Box sx={{ padding: '2rem 1rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '2rem' }}>Product Highlights</Typography>
        <Grid container spacing={3}>
          {highlights.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)',}}>
                <Avatar sx={{backgroundColor: '#821810', color: 'white', width: 64, height: 64, mt: 2 }}>{item.icon}</Avatar>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif' }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-line', color: 'gray', fontFamily: '"Poppins", sans-serif' }}>{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', mt: 5 }}>Product Overview</Typography>
          <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif', color: '#2B2B2B', mt: 3}}>Raybestos R-Line brake system is exactly what you would expect from the best in brakes. These R-Line Semi-Metallic Brake Pads have broad coverage for everyday driving. It is suitable for drivers wanting reliable performance and superior stopping power.</Typography>
          <Typography variant="h6" sx={{fontFamily: '"Poppins", sans-serif', color: '#2B2B2B'}}>Features & Benefits</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <List>
               {[
                'Provide consistent stopping power',
                 'Manufactured to match OE specifications',
                 'Chamfers and slots found, match the original equipment design, which allows braking gases to be released, reducing noise, harshness, and vibration',
                 'Premium layered steel shim is included with all R-Line products',
                 'Hardware included where applicable',
                 ].map((text, index) => (
                  <ListItem key={index} sx={{ alignItems: 'flex-start', padding: '5px' }}>
                    <ListItemIcon sx={{ minWidth: '20px' }}>
                      <CircleIcon sx={{ fontSize: '5px', color: 'black', marginTop: '12px' }} />
                    </ListItemIcon>
                    <ListItemText primary={text} primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem', color: '#333' }}/>
                  </ListItem>
               ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid className='section-bottom' container spacing={4} sx={{ padding: '20px' }}>
        {products.map((section) => (
          <Grid item xs={12} sm={6} md={3} key={section.category}>
            <Typography variant="h6" sx={{fontFamily: '"Poppins", sans-serif', mb: 2}}>{section.category}</Typography>
            <Grid container spacing={3} direction='column'>
              {section.items.map((item, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <Card sx={{display: 'flex'}}>
                    <CardMedia component="img" sx={{height: '100px', width: '100px'}} image={item.image} alt={item.title}/>
                    <CardContent>
                      <Typography variant="body1" sx={{fontFamily: '"Poppins", sans-serif', color: '#191C1F'}}>{item.title}</Typography>
                      <Typography variant="h6" color="error" sx={{ fontWeight: 'bold', fontFamily: '"Poppins", sans-serif' }}>{item.price}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductDescription;
