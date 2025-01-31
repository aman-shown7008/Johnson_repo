import React, {useState} from "react";
import { Typography, Button, Box, TextField, IconButton, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import StarIcon from "@mui/icons-material/Star";
import Logo from "../images/logo.png";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const[ anchorEl, setAnchorEl ] = useState(null);
  const[currentMenu, setCurrentMenu] = useState(null);
  const[ selectedCategory, setSelectedCategory ] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const categories = [
    { name: "Regular Service" },
    { name: "Replacement", options: ["Engine Parts", "Suspension", "Transmission"], },
    { name: "Body" },
    { name: "Lighting" },
    { name: "Tools", options: ["Wrenches", "Screwdrivers", "Diagnostic Tools"], },
    { name: "Performance", options: ["Exhaust Systems", "Turbochargers", "Air Intakes"], },
    { name: "Tires & Wheels", options: ["All-Season Tires", "Rims", "Tire Accessories"], },
    { name: "Interior", options: ["Seat Covers", "Floor Mats", "Steering Wheels"], },
    { name: "Exterior", options: ["Roof Racks", "Spoilers", "Grilles"], },
    { name: "Specialty", options: ["Custom Mods", "Vintage Parts", "Rare Finds"], },
    { name: "Merchandise", options: ["T-Shirts", "Hats", "Keychains"], },
  ];

  const handleClick = (event, category) => {
    if(category.options){
      setAnchorEl(event.currentTarget);
      setCurrentMenu(currentMenu === category.name ? null : category.name);
    }
    setSelectedCategory(category.name);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  }

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Box>
      {/* Top Header */}
      <Box sx={{ display: "flex", justifyContent: {xs:"center", md:"space-between"}, alignItems: "center", backgroundColor: "#000", color: "#fff", padding: "8px 16px", flexWrap: "wrap",}}>
        <Typography variant="body6">FREE 1-3 day delivery over $99*</Typography>
        <Box sx={{ display: "flex", alignItems: "center"}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StarIcon sx={{ color: "#ffc107", fontSize: "16px" }} />
            <StarIcon sx={{ color: "#ffc107", fontSize: "16px" }} />
            <StarIcon sx={{ color: "#ffc107", fontSize: "16px" }} />
            <StarIcon sx={{ color: "#ffc107", fontSize: "16px" }} />
            <StarIcon sx={{ color: "#ffc107", fontSize: "16px" }} />
            <Typography variant="body6" sx={{ marginLeft: "4px" }}>4.6 stars | 16,600+ reviews</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ fontSize: "16px", marginRight: "4px" }} />
          <Typography variant="body6">+01 4376782567</Typography>
        </Box>
      </Box>

      {/* Main Navbar */}
      <Box className="section" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0px", backgroundColor: "#810000", flexWrap: "wrap", gap: {xs: "10px", md:"20px"},}}>
        <Link to="/" style={{margin: '0 auto'}}>
          <Box component="img" src={Logo} alt="Logo" sx={{ height: "100px", width: "200px", objectFit: "contain", borderRadius: "10px", m: {xs: 'auto', md: 0}}}/>
        </Link>
        <Button variant="outlined" sx={{textTransform: "none", display: { xs: "none", md: "inline-flex" }, border: '2px solid #fff', color: '#fff'}}><DirectionsCarFilledOutlinedIcon/> 1988 MASERATI 430</Button>

        {/* Search Bar */}
        <TextField placeholder="Search by part name, part number or..." variant="outlined" size="small" sx={{  minWidth: { xs: "100%", md: "400px" }, order: { xs: 3, md: 0 }, backgroundColor: '#fff', borderRadius: '5px', marginRight: {xs: '0px', md:'50px'}, my: {xs: 2, md: 0}}}
          InputProps={{ endAdornment: (
              <IconButton>
                <SearchIcon sx={{color: '#810000', fontSize: '30px'}} />
              </IconButton>),
        }}/>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 2, order: { xs: 2, md: 0 }, color: '#fff', fontSize: '1rem'}}>
          <Link to="/" className="link-c"><Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: '#fff'}}>
            <Brightness7OutlinedIcon/>
            <Typography sx={{fontSize: {xs: '0.9rem', md: '1rem'}, fontWeight: {xs: '500', md: 'bold'}, fontFamily: '"Poppins", sans-serif',}}>Settings</Typography>
          </Box></Link>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <QuestionAnswerOutlinedIcon/>
            <Typography sx={{whiteSpace: 'nowrap', fontSize: {xs: '0.9rem', md: '1rem'}, fontWeight: {xs: '500', md: 'bold'}, fontFamily: '"Poppins", sans-serif',}}>24/7 Help</Typography>
          </Box>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <LanguageOutlinedIcon/>
            <Typography sx={{fontSize: {xs: '0.9rem', md: '1rem'}, fontWeight: {xs: '500', md: 'bold'}, fontFamily: '"Poppins", sans-serif',}}>EN|FR</Typography>
          </Box>
          <Link to="/login" className="link-c"><Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: '#fff'}}>
            <AccountCircleOutlinedIcon/>
            <Typography variant="body6" fontWeight='bold' sx={{whiteSpace: 'nowrap', fontSize: {xs: '0.9rem', md: '1rem'}, fontWeight: {xs: '500', md: 'bold'}, fontFamily: '"Poppins", sans-serif',}}>My Account</Typography>
          </Box></Link>
          <Link to="/cart" className="link-c"><Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: '#fff'}}>
            <ShoppingCartOutlinedIcon/>
            <Typography sx={{fontSize: {xs: '0.9rem', md: '1rem'}, fontWeight: {xs: '500', md: 'bold'}, fontFamily: '"Poppins", sans-serif',}}>Cart</Typography>
          </Box></Link>
        </Box>
      </Box>

      {/* Categories */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', backgroundColor: '#fff', boxShadow: '0px 2px 4px rgba(0,0,0,0.1)' }}>
        <IconButton onClick={toggleMenuVisibility}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Box sx={{display: { xs: menuVisible ? 'flex' : 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '8px 10px', boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', flexWrap: 'wrap', overflow: 'hidden'}}>
        {categories.map((category, index) =>(
          <Box key={index} sx={{ marginBottom: { xs: '8px', md: '0' }}}>
            <Button sx={{ textTransform: "none", fontWeight: "bold", color: selectedCategory === category.name ? "#fff" : "#000", backgroundColor: selectedCategory === category.name ? "#000" : "transparent", fontSize: { xs: '0.9rem', md: '1rem' }, padding: { xs: '6px 12px', md: '8px 16px' }}} onClick={(event) => handleClick(event, category)} endIcon={ category.options ? ( currentMenu === category.name ? ( <ArrowDropUpIcon /> ) : ( <ArrowDropDownIcon /> )) : null}>
              {category.name}
            </Button>
            <Menu anchorEl={anchorEl} open={currentMenu === category.name} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} transformOrigin={{vertical: 'top', horizontal: 'left'}}  PaperProps={{ sx: { width: { xs: '200px', md: 'auto' }, maxHeight: { xs: '200px', md: 'none' },  overflowY: 'auto', },}}>
              { category.options && category.options.map((option, optionIndex) => (
                  <MenuItem key={optionIndex} onClick={handleClose} sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>{option}</MenuItem>))
              }
            </Menu>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Navbar;