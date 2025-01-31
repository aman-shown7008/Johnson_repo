import React, { useState} from 'react';
import { Typography, Button, Box, Menu, MenuItem, Grid, Card, CardMedia, CardContent } from "@mui/material";
import prod1 from "../images/prod1.png";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SouthIcon from '@mui/icons-material/South';
import { Link } from "react-router-dom";

const products = [
  {id: 1, img: prod1, name: 'Clutch EVO', price: 'CAD$224.99-239.99'},
  {id: 2, img: prod2, name: 'Yth Helium Monosuit', price: 'CAD$369.99-409.99'},
  {id: 3, img: prod3, name: 'Ch Boost Jacket', price: 'CAD$169.99'},
  {id: 4, img: prod2, name: 'Clutch EVO', price: 'CAD$224.99-239.99'},
  {id: 5, img: prod3, name: 'Yth Helium Monosuit', price: 'CAD$369.99-409.99'},
  {id: 6, img: prod1, name: 'Ch Boost Jacket', price: 'CAD$169.99'}
]

function Product() {
    const[anchorEl, setAnchorEl] = useState(null);
    const[itemToShow, setItemsToShow] = useState("6");
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = (value) => {
      if(value) setItemsToShow(value);
      setAnchorEl(null);
    }


  return (
    <Box className = "section sectionTB">
      <Box sx={{padding: '0'}}>
        <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px'}}>Power <span style={{color: '#810000'}}>Sports</span></Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
          <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Button onClick={handleMenuOpen} endIcon={<ArrowDropDownIcon />} sx={{backgroundColor: '"#F8F8F8', color: "#49494A!important", border: "1px solid #49494A", textTransform: 'capitalize', fontWeight: '500', marginBottom: '100px'}}>Show {itemToShow}</Button>
            <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={ () => handleMenuClose(null)}>
                {["10", "20", "30", "40", "50"].map((value) =>(
                  <MenuItem key={value} onClick={() => handleMenuClose(value)}>
                    Show {value}
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Link to="/productdescription" className="link-c"><Card sx={{borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', textAlign: 'center', px: 2}}>
                <CardMedia component="img" image={product.img} alt={product.name} sx={{height: '150px', objectFit: 'contain', margin: '10px auto', textAlign: 'center', borderBottom: '1px solid #E0E0E0',pb: 2}}/>
                <CardContent>
                  <Typography variant='body6' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: '500',}}>{product.name}</Typography><br/>
                  <Typography variant='h6' sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold'}}>{product.price}</Typography>
                </CardContent>
              </Card></Link>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="contained" endIcon={<SouthIcon />} sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: "#fff", color: "#000", fontWeight: '500', textTransform: "capitalize", px: 5, borderRadius: "20px", fontSize: '1.1rem',"&:hover": { backgroundColor: "#000", color: '#fff'}}}>See More</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Product;