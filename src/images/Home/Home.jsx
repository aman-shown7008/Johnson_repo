import React, {useState} from "react";
import { Box, Typography, Button, TextField, Grid, Card, CardMedia, CardContent, Tabs, Tab, InputAdornment } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import HomeImg from "../images/homeImg.png";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import autoParts1 from "../images/autoParts1.png";
import autoParts2 from "../images/autoParts2.png";
import autoParts3 from "../images/autoParts3.png";
import autoParts4 from "../images/autoParts4.png";
import autoParts5 from "../images/autoParts5.jpg";
import autoParts6 from "../images/autoParts6.jpg";
import autoParts7 from "../images/autoParts7.jpg";
import autoParts8 from "../images/autoParts8.jpg";
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
import kite from "../images/kite.png";
import expert1 from "../images/expert1.png";
import expert2 from "../images/expert2.png";
import video1 from "../images/video1.jpg";
import shop from "../images/shop1.jpg";
import reviews from "../images/review.jpg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StarIcon from "@mui/icons-material/Star";
import homeVideo from "../images/home_video.gif";
import car1 from "../images/car1.png";
import car2 from "../images/car2.png";
import { Link } from "react-router-dom";

function Home() {
  const[activeCategory, setActiveCategory] = useState("Top Selling");
  const[selectedService, setSelectedService] = useState(null);

  const categories = [
    { name: "Replacement Parts", icon: autoParts1 },
    { name: "Bodyparts", icon: autoParts2 },
    { name: "Lightings", icon: autoParts3 },
    { name: "Tools & Equipment", icon: autoParts4 },
    { name: "Exterior", icon: autoParts1 },
    { name: "Interior", icon: autoParts2 },
    { name: "Performance Parts", icon: autoParts3 },
    { name: "Wheels & Tyres", icon: autoParts4 },
    { name: "Specialty Parts", icon: autoParts1 },
  ];

  const cardData = [
    { image: autoParts5, title: "Lorem Ipsum", description: "Lorem IpsumLorem IpsumLorem Ipsum" },
    { image: autoParts6, title: "Lorem Ipsum", description: "Lorem IpsumLorem IpsumLorem Ipsum" },
    { image: autoParts7, title: "Lorem Ipsum", description: "Lorem IpsumLorem IpsumLorem Ipsum" },
    { image: autoParts8, title: "Lorem Ipsum", description: "Lorem IpsumLorem IpsumLorem Ipsum" },
  ];

  const allCarParts = [
    { name: "Top Selling", images: [part1, part2, part3, part4, part5, part6, part7, part8 ] },
    { name: "Replacement Parts", images: [part7, part8, part9, part10, part11, part12, part7, part8] },
    { name: "Lighting", images: [part1, part2, part3, part4, part5, part6, part7, part8] },
    { name: "Performance", images: [part7, part8, part9, part10, part11, part12, part7, part8] },
    { name: "Tools", images: [part1, part2, part3, part4, part5, part6, part7, part8] },
    { name: "Body Parts", images: [part7, part8, part9, part10, part11, part12, part7, part8] },
    { name: "Interior", images: [part1, part2, part3, part4, part5, part6, part7, part8] },
    { name: "Exterior", images: [part7, part8, part9, part10, part11, part12, part7, part8] },
    { name: "Wheels and Tires", images: [part1, part2, part3, part4, part5, part6, part7, part8] },
    { name: "Specialty Parts", images: [part7, part8, part9, part10, part11, part12, part7, part8] },
  ]

  const serviceParts = [
    { id: 1, title: "Control Arm", description: "The right choice for the value-driven repair." },
    { id: 2, title: "Brake Rotors", description: "Exceptional Stopping Power." },
    { id: 3, title: "Suspension", description: "Smooth and comfortable driving experience." },
    { id: 4, title: "Steering", description: "Precision steering for a better drive." },
    { id: 5, title: "Exhaust System", description: "Better performance and sound." },
  ]


const infoData = [
  { id: 1, image: reviews, title: "Free Shipping", description: "On order above $99", },
  { id: 2, image: reviews, title: "Secure Payment", description: "100% Protected",},
];

const carData = [
  { id: 1, bName: 'Nissan Datsun', image: car1, label: "All Nissan Models" },
  { id: 2, bName: 'Toyota', image: car2, label: "Altima" },
  { id: 3, bName: 'Dodge', image: car1, label: "Pathfinder" },
  { id: 4, bName: 'Kia', image: car2, label: "Sentra" },
  { id: 5, bName: 'Ford', image: car1, label: "Titan" },
  { id: 6, bName: 'Honda', image: car1, label: "Versa" },
  { id: 7, bName: 'Hyundai', image: car2, label: "Xterra" },
  { id: 8, bName: 'BMW', image: car1, label: "Armada" },
];

  const reviews1 = [
    { title: "Brake pads and rotors", description: "Received genuine products.They were easy to install and packaging was good too.Satisfied", img: reviews, name: "Shiva R", date: "14-May-2024 9:06 AM", ratings: "5" },
    { title: "Brake pads and rotors", description: "Received genuine products.They were easy to install and packaging was good too.Satisfied", img: reviews, name: "Shiva R", date: "14-May-2024 9:06 AM", ratings: "5" },
    { title: "Brake pads and rotors", description: "Received genuine products.They were easy to install and packaging was good too.Satisfied", img: reviews, name: "Shiva R", date: "14-May-2024 9:06 AM", ratings: "5" },
    { title: "Brake pads and rotors", description: "Received genuine products.They were easy to install and packaging was good too.Satisfied", img: reviews, name: "Shiva R", date: "14-May-2024 9:06 AM", ratings: "5" }
  ]

  const shops = [
    {icon: shop, title: "Air Fresheners", description: "Experience freshness with our long-lasting and stylish car air fresheners."},
    {icon: shop, title: "Car Care & Detailing", description: "Keep your car looking fresh with our easy-to-use and extremely effective car care and detailing products"},
    {icon: shop, title: "Men's T-shirts", description: "Discover our men's top-quality, breathable, and stylish 100% cottont-shirts."},
    {icon: shop, title: "Women's T-shirts", description: "Explore our women's top-quality, breathable, and stylish 100% cottont-shirts."},
  ]

  const cards = Array(8).fill({
    title: "DORMAN",
    subtitle: "Lorem Ipsum",
    description: "Dorman (OE Solutions)"
  })

  const videos = [
    { title: "The Ultimate Guide to Buying a Car.", imgSrc: video1 },
    { title: "Scotty Kilmer Versus PartsAvatar.", imgSrc: video1 },
    { title: "How do LIQUI MOLY Additives work?", imgSrc: video1 },
  ];

  const expertHelp = [
    {icon: expert1, title: "Amazing Value Every Day", description: "The brands you prefer, at the prices you crave"},
    {icon: expert2, title: "Fast &Free Shipping Over $99", description: "Order ships out in a snap, and delivers in 1-3 days at most places"},
    {icon: expert1, title: "Expert Customer Service", description: "Our friendly team's on hand seven days a week"},
    {icon: expert2, title: "Unbeatable Selection", description: "Everything you want for your car all in one place"},
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleSelectedService = (id) => {
    setSelectedService(id);
  }

  return (
    <Box className="home">
      {/* Main Section */}
      <Grid container sx={{margin: '0px', alignItems: 'stretch'}}>
        <Grid item xs={12} md={4} sx={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#810000", padding: '20px 20px 5px 20px', border: "1px solid #ccc", maxHeight: '345px'}}>
          <Button startIcon={<DirectionsCarIcon sx={{color: '#810000'}}/>} sx={{ textTransform: "none", color: "#000", backgroundColor: "#fff", fontWeight: "bold", width: "100%",marginBottom: 2,}}>Select your vehicle</Button>
          <TextField placeholder="Type Model" fullWidth variant="outlined" sx={{ marginBottom: 2, "& .MuiOutlinedInput-root": { border: "1.5px solid #a50606", borderRadius: "4px", backgroundColor: "#fff",},}}/>
          <TextField placeholder="Type Model" fullWidth variant="outlined" sx={{ marginBottom: 2, "& .MuiOutlinedInput-root": { border: "1.5px solid #a50606", borderRadius: "4px", backgroundColor: "#fff",},}}/>
          <TextField placeholder="Type Model" fullWidth variant="outlined" sx={{ "& .MuiOutlinedInput-root": { border: "1.5px solid #a50606", borderRadius: "4px", backgroundColor: "#fff",},}}/>
          <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 1, color: '#fff'}}>   
            <Box sx={{ textAlign: "center" }}>
              <Link to="/login" className="link-c"><Box sx={{display: 'flex'}}>
                <Typography variant="body1" sx={{fontFamily: '"Poppins", sans-serif',fontWeight: 'bold', cursor: 'pointer', color: '#fff'}}>Sign in</Typography>
                <LoginOutlinedIcon sx={{color: '#fff'}}/>
              </Box></Link>
              <Typography variant="body6">for best experience</Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Link to="/signup" className="link-c"><Box sx={{display: 'flex'}}>
                <Typography variant="body1" sx={{fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', cursor: 'pointer', color: '#fff'}}>Sign up</Typography>
                <AddOutlinedIcon sx={{color: '#fff'}}/>
              </Box></Link>
              <Typography variant="body6">New customer?</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 0}}>
          <Box sx={{padding: 0, width: '100%', height: '100%'}}>
            <Box component="img" src={HomeImg} alt="Logo" sx={{ objectFit: "cover", borderRadius: "0px", width: '100%', height: {xs:'auto', md: '345px'}}}/>
          </Box>
        </Grid>
      </Grid>

      {/* Lower Panel */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 4, padding: 2}} className="section">
       <Grid container spacing={2} alignItems="center" sx={{ display: "flex", justifyContent: "space-between",}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <PaidOutlinedIcon fontSize="large" sx={{color: '#CABCBC'}}/>
          <Typography variant="body6" fontWeight="bold" color="#6B676C" sx={{marginLeft: '15px'}}>Lowest Prices in Canada*</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <LocalShippingOutlinedIcon fontSize="large" sx={{color: '#CABCBC'}}/>
          <Typography variant="body6" fontWeight="bold" color="#6B676C" sx={{marginLeft: '15px'}}>Free 1-3 day delivery over <p style={{fontSize: "20px"}}>$99*</p></Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <DescriptionOutlinedIcon fontSize="large" sx={{color: '#CABCBC'}}/>
          <Typography variant="body6" fontWeight="bold" color="#6B676C" sx={{marginLeft: '15px'}}>2 million auto parts in stock</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <StoreOutlinedIcon fontSize="large" sx={{color: '#CABCBC'}}/>
          <Typography variant="body6" fontWeight="bold" color="#6B676C" sx={{marginLeft: '15px'}}>Local Pickup & Delivery</Typography>
        </Box>
       </Grid>
      </Box>

      {/* Footer Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2, gap: '10px', flexWrap: 'wrap', m: '0' }} className="section sectionTB">
        <Link to="/product"><Button variant="contained" sx={{ textTransform: "none", backgroundColor: "#810000", padding: {xs: "10px 30px 10px", md:"15px 50px 15px"}, "&:hover": { backgroundColor: "#8a0505" }, fontSize: {xs:'1rem', md:'1.4rem'}, width: {xs: '100%', md: 'auto'}}}>OEM Pre-Owned <EastOutlinedIcon /></Button></Link>
        <Link to="/product"><Button variant="contained" sx={{textTransform: "none", backgroundColor: "#810000", padding: {xs: "10px 30px 10px", md:"15px 50px 15px"}, "&:hover": { backgroundColor: "#8a0505" },fontSize: {xs:'1rem', md:'1.4rem'}, width: {xs: '100%', md: 'auto'}}}> Power Sports <EastOutlinedIcon /></Button></Link>
        <Link to="/product"><Button variant="contained" sx={{ textTransform: "none", backgroundColor: "#810000", padding: {xs: "10px 30px 10px", md:"15px 50px 15px"}, "&:hover": { backgroundColor: "#8a0505" },fontSize: {xs:'1rem', md:'1.4rem'}, width: {xs: '100%', md: 'auto'}}}>New Aftermarket <EastOutlinedIcon /></Button></Link>
      </Box>

      {/* Auto Parts */}
      <Box className="section-bottom section" sx={{padding: {xs:'10px 20px!important', md:'30px 80px 30px!important'}, textAlign: 'center', backgroundColor: '#F2F3F4'}}>
        <Typography variant="h4" sx={{fontWeight: 'bold', color: '#49494A', mb: 1}}>Auto Parts</Typography>
        <Typography variant="body6" sx={{color: '#821810', fontFamily: '"Poppins", sans-serif', fontWeight: '500'}}>Largest Catalog of OEM & Aftermarket Auto Parts in Canada</Typography><br/>
        <Typography variant="body6" sx={{color: '#7D7E7F', fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur. Mollis dolor maecenas augue pretium sit bibendum. Vestibulum pellentesque adipiscing arcu euismod leo nunc. Risus nunc vel vel a sodales sit viverra amet. Non aenean porttitor sem amet nisl ultrices viverra et.</Typography><br/>
        <Button variant="text" sx={{ color: "#821810", marginBottom: "30px", fontWeight: 'bold', textTransform: 'capitalize' }}>Show More &gt;&gt;</Button>

        <Grid container spacing={3} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item key={index}>
              <Button variant="outlined" sx={{borderRadius: '10px', padding: '10px 20px', width: '130px', height: '140px', display: 'flex', justifyContent: 'space-between',flexDirection: 'column', alignItems: 'center', textTransform: 'capitalize', backgroundColor: '#fff', border: '2px solid #DEDEDC', color: '#000000', transition: 'transform 0.3s, width 0.3s, height 0.3s', '&:hover':{transform: 'scale(1.08)', width: '130px', height: '140px', border: '2px solid #821810', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'} }}>
                <Box component="img" src={category.icon} alt={category.name} sx={{ objectFit: "cover", borderRadius: "0px", paddingLeft: '10px'}}/>
                <Typography variant="body6">{category.name}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginTop: "30px", backgroundColor: '#F2F3F4'}}>
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <Box key={index} sx={{ padding: '0px 10px'}}>
              <Card sx={{ borderRadius: "10px", boxShadow: "none", textAlign: "center"}}>
                <CardMedia component="img" height="220" image={card.image} alt={card.title} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: '#AA3540' }}>{card.title}</Typography>
                  <Typography variant="body6" sx={{ fontWeight: "bold", color: "#5F7084" }}>{card.description}</Typography>
                </CardContent>
              </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* Shop-All-Auto-Parts */}
      <Box className="section-bottom section" sx={{padding: {xs:'10px 20px!important', md:'30px 80px 30px!important'}, textAlign: 'center', backgroundColor: '#F2F3F4'}}>
        <Typography variant="h4" sx={{fontWeight: 'bold', color: '#49494A', mb: 1}}>Shop All Auto Parts</Typography>
        <Typography variant="body6" sx={{color: '#7D7E7F', fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur. Est turpis praesent lorem tortor porta augue. Ut id ultricies eleifend ullamcorper consequat aliquet eleifend massa mauris. Viverra arcu vivamus malesuada egestas pellentesque volutpat. Egestas amet quam imperdiet magna enim.</Typography><br/>
        <Button variant="text" sx={{ color: "#821810", marginBottom: "30px", fontWeight: 'bold', textTransform: 'capitalize' }}>Show More &gt;&gt;</Button>

        <Tabs value={activeCategory} onChange={(e, newValue) => setActiveCategory(newValue)} centered sx={{display: 'flex', flexWrap: 'wrap!important',mb: 3, "& .MuiTab-root": { textTransform: "capitalize", fontWeight: "bold" }, "& .Mui-selected": { color: "#7A7C7C" }, "& .MuiTabs-indicator": {backgroundColor: '#911C14'}}}>
          {allCarParts.map((category) => (
            <Tab key={category.name} label={category.name} value={category.name} />
          ))}
        </Tabs>

        <Grid container spacing={2} justifyContent="center">
          {allCarParts.find((category) => category.name === activeCategory).images.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ borderRadius: "10px",  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', textAlign: "left" }}>
                <CardMedia component="img" height="140" image={image} alt={`Image ${index + 1}`} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000", fontFamily: '"Poppins", sans-serif'}}>M276 ECU Tune</Typography>
                  <Typography variant="body6" sx={{ fontWeight: "bold", color: "#5F7084", fontFamily: '"Poppins", sans-serif'}}>Start at C$1,425</Typography>
                  <Box sx={{display: 'flex', alignItems: 'center', marginTop: 1, gap: {xs: '30px', md:'50px'}, fontFamily: '"Poppins", sans-serif', flexWrap: 'wrap'}}>
                    <Typography variant="body6" sx={{color: '#911C14', backgroundColor: '#F8F8F8', padding: '5px 10px', borderRadius: '5px', fontWeight: '500'}}>C300</Typography>
                    <Typography variant="body6" sx={{color: '#911C14', backgroundColor: '#F8F8F8', padding: '5px 10px', borderRadius: '5px', fontWeight: '500'}}>C400</Typography>
                    <Typography variant="body6" sx={{color: '#911C14', backgroundColor: '#F8F8F8', padding: '5px 10px', borderRadius: '5px', fontWeight: '500'}}>C450</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Buy-Auto-Parts */}
      <Box className="section-bottom section" sx={{padding: {xs:'20px!important', md:'30px 80px 30px!important'}, textAlign: 'center', backgroundColor: '#fff'}}>
        <Typography variant="h4" sx={{fontWeight: 'bold', color: '#49494A', mb: 2}}>Buy Auto Parts for Regular Service</Typography>
        <Slider {...settings}>
          {serviceParts.map((part) => (
            <Box key={part.id} sx={{p: 2}}>
              <Card onClick = {() => handleSelectedService(part.id)} sx={{borderRadius: '10px', textAlign: 'center', background: selectedService === part.id ? "linear-gradient(to right, #aa3540, #821810)" : '#FFBBB6', color: selectedService === part.id ? '#fff' : '#000', padding: '10px', height: selectedService === part.id ? '190px' : '180px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transform: selectedService === part.id ? 'scale(1.05)' : 'scale(1)', transition: 'all 0.3s ease-in-out', zIndex: '100'}}>
                <CardContent sx={{textAlign: 'left'}}>
                  <Typography variant="h6" sx={{fontWeight: 'bold', mb: 1, color: selectedService === part.id ? '#fff' : '#810101', fontFamily: '"Poppins", sans-serif'}}>{part.title}</Typography>
                  <Typography variant="body6" sx={{mb: 2, color: selectedService === part.id ? '#fff' : '#81010173', fontFamily: '"Poppins", sans-serif'}}>{part.description}</Typography><br/>
                  {selectedService === part.id && (
                    <Button variant="contained" sx={{backgroundColor: '#FFBBB6', color: '#5A0000', textTransform: 'capitalize', fontWeight: 'bold', "&hover": {backgroundColor: '#FFBBB6'}, borderRadius: '10px', mt: 2, border: '2px solid #5A0000'}}>Up To 70%Off</Button>
                  )}
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box className="section" sx={{ backgroundColor: "#F2F3F4", display: "flex",flexWrap: 'wrap', justifyContent: "center", gap: '40px',textAlign: "left", marginBottom: "80px", padding: '80px'}}>
        {infoData.map((review) => (
          <Box key={review.id} sx={{border: "1px solid #F2F3F4", display: "flex", flexDirection: {xs: 'column', sm: 'row'} ,gap: "20px", alignItems: 'center',transition: "box-shadow 0.3s ease", "&:hover": { boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", }, borderRadius: '10px', padding: '20px'}}>
            <Box component="img" src={review.image} alt={review.title} sx={{ height: "200px", width: "200px", borderRadius: "50%",}}/>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: 'center', width: '100%'}}>
              <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mb: 2, fontFamily: '"Poppins", sans-serif', color: "#5A5A5A",}}>{review.title}</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", textAlign: "center", mb: 2, fontFamily: '"Poppins", sans-serif', color: "#5A5A5A",}}>{review.description}</Typography>
              <Button variant="contained" sx={{ backgroundColor: "#810000", color: "#fff", borderRadius: "10px", textTransform: "none", mt: 2, py: 1, fontSize: "18px", px: 8,}}>Read More</Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Aftermarket Auto Parts */}
      <Box sx={{textAlign: 'center', padding: '0 20px 20px 20px'}}>
        <Box className="section">
          <Typography variant="h4" sx={{fontWeight: 'bold', color: '#49494A', mb: 1}}>Buy OEM & Aftermarket Auto Parts for All Cars</Typography>
          <Typography variant="body6" sx={{color: '#7D7E7F', fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur. Varius consequat enim diam ut at mi praesent pulvinar. Sem tempor ipsum id ac accumsan tempor hac sagittis pellentesque. Vestibulum tortor a feugiat dictumst. Eu nunc elit nibh consequat turpis tempor bibendum.</Typography><br/>
          <Box x={{display: 'flex', gap: '20px', flexWrap: 'wrap', mt: 2, justifyContent: 'center'}}>
            {/* {carData.map((car, idx)=> (
              <Box key={idx}>  
                <Button sx={{color: '#7D7E7F', backgroundColor: '#F8F8F8', border: '1px solid #7D7E7F', textTransform: 'capitalize', px: 2}}>{car.bName}</Button>
              </Box>
            ))} */}
          </Box>
          <Slider {...settings3}>
            {carData.map((car, index) => (
              <Box key={index} sx={{ padding: "10px"}}>
                {/* <Button sx={{color: '#7D7E7F', backgroundColor: '#F8F8F8', border: '1px solid #7D7E7F', textTransform: 'capitalize', px: 2}}>{car.bName}</Button> */}
                <Box sx={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '150px', mt: 2}}>
                  <img src={car.image} alt={car.label} style={{ width: "100px", height: "100px", objectFit: "contain" }}/>
                  <Typography variant="body6" sx={{ padding: "10px", fontWeight: "500", color: '#6A6A6B', fontFamily: '"Poppins", sans-serif'  }}>{car.label}</Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* Home-video */}
      <Box className="home-video section section-bottom" sx={{mb: {xs: 4, md: 'auto'}}}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(to right, #810000, #000000)", borderRadius: "10px", overflow: "hidden", height: "300px", padding: "20px 0px 20px 20px", flexDirection: {xs: 'column', md: 'row'}}}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 1, color: "#fff", padding: "20px"}}>
            <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "10px", fontFamily: '"Poppins", sans-serif', fontSize: {xs: '1.8rem', md: '3rem'}}}>Everything you need is here!</Typography>
            <Typography variant="body6" sx={{ marginBottom: "20px", fontFamily: '"Poppins", sans-serif'}}>For faster, easier purchase and exclusive deals</Typography>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button variant="contained" sx={{ backgroundColor: "#000", color: "#fff", fontWeight: 'bold', textTransform: 'capitalize', "&:hover": { backgroundColor: "#333"}, fontSize: '1.2rem', padding: {xs: '5px 40px', md: '8px 50px'}}}>See</Button>
              <Button variant="outlined" sx={{ backgroundColor: "#fff", color: "#000",fontWeight: 'bold',textTransform: 'capitalize', "&:hover": { backgroundColor: "#fff", color: "#000",}, fontSize: '1.2rem', padding: {xs: '5px 40px', md: '8px 50px'}}}>Buy</Button>
            </Box>
          </Box>

          <Box sx={{ flex: 1, display: {xs: 'none', md:"flex"}, justifyContent: 'flex-end '}}>
            <Box component="img" src={homeVideo} alt="Right Side GIF" sx={{ height: "300px", maxWidth: "100%", objectFit: "cover"}}/>
          </Box>
        </Box>
      </Box>

      {/* Parts Avatar Reviews */}
      <Box className="section section-bottom" sx={{textAlign: 'center'}}>
        <Typography variant="h4" sx={{fontWeight: 'bold',textAlign: 'center', mb: 2, fontFamily: '"Poppins", sans-serif', color: '#5A5A5A'}}>Parts Avatar Reviews</Typography>
        <Typography variant="body6" sx={{fontWeight: 'bold',textAlign: 'center', mb: 4, fontFamily: '"Poppins", sans-serif', color: '#821810'}}>Excellent</Typography><br/>
        <Typography variant="body6" sx={{fontWeight: 'bold',textAlign: 'center', mb: 4, fontFamily: '"Poppins", sans-serif', color: '#868685'}}>Lorem ipsum dolor sit amet consectetur. Gravida purus vulputate feugiat erat. Tellus sit molestie </Typography>

        <Slider {...settings1}>
          {reviews1.map((review, idx) => (
            <Box key={idx} sx={{p: 2}}>
              <Card sx={{borderRadius: '10px', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid #821810'}}>
                <Typography variant="body6" sx={{color: '#821810', fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>{review.title}</Typography>
                <Typography variant="body6" sx={{color: '#2D2D2D', fontWeight: '500', fontFamily: '"Poppins", sans-serif'}}>{review.description}</Typography>
                <CardMedia component="img" height="70px" image={review.img} alt={review.title} sx={{ borderRadius: '50px', width: '70px', my: 2}}/>
                <Typography variant="body6" sx={{color: '#821810', fontWeight: '500', fontFamily: '"Poppins", sans-serif'}}>{review.name}</Typography>
                <Typography variant="body6" sx={{color: '#454545', fontWeight: '500', fontFamily: '"Poppins", sans-serif'}}>{review.date}</Typography>  
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StarIcon sx={{ color: "#F33F3F", fontSize: "20px" }} />
                  <StarIcon sx={{ color: "#F33F3F", fontSize: "20px" }} />
                  <StarIcon sx={{ color: "#F33F3F", fontSize: "20px" }} />
                  <StarIcon sx={{ color: "#F33F3F", fontSize: "20px" }} />
                  <StarIcon sx={{ color: "#F33F3F", fontSize: "20px" }} />
                  <Typography variant="body6" sx={{ marginLeft: "4px", color: '#821810', fontWeight: 'bold'}}>5/5</Typography>
                </Box>
              </Card>
            </Box>
          ))}
         </Slider>
      </Box>

      {/* Shop Merchandise */}
      <Box className="section section-bottom" sx={{my: {xs: 4, md: 'auto'}}}>
        <Typography variant="h4" sx={{fontWeight: 'bold', color: '#49494A', mb: 1, textAlign: 'center'}}>Shop Merchandise</Typography>
         <Slider {...settings}>
          {shops.map((shop, idx) => (
            <Box key={idx} sx={{p: 2}}>
              <Card sx={{borderRadius: '10px', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", height: '300px'}}>
                <CardMedia component="img" height="150px" image={shop.icon} alt={shop.title} sx={{objectFit: 'cover'}}/>
                <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                  <Typography variant="h6" sx={{color: '#768292', fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>{shop.title}</Typography>
                  <Typography variant="body6" sx={{color: '#C0C0C0', fontWeight: '500', fontFamily: '"Poppins", sans-serif'}}>{shop.description}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
         </Slider>
      </Box>

      {/* Buy-Auto-Parts from OEM */}
      <Box className="section sectionTB" sx={{textAlign: 'center'}}> 
        <Typography variant="h4" sx={{fontWeight: 'bold', color: '#49494A', mb: 1}}>Buy Auto Parts from OEM & Aftermarket Manufacturers</Typography>
        <Typography variant="body6" sx={{color: '#929292', fontFamily: '"Poppins", sans-serif', fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur. Viverra risus nec massa vel est quis. Massa purus quis imperdiet mauris.</Typography><br/>
        <Typography variant="body6" sx={{color: '#929292', fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur. Viverra sagittis porta nam purus id suspendisse. Ultricies amet enim sed pulvinar.</Typography><br/>
        <Button variant="text" sx={{ color: "#821810", marginBottom: "30px", fontWeight: 'bold', textTransform: 'capitalize' }}>Show More &gt;&gt;</Button>

        <Grid container spacing={2}>
          {cards.map((card, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{borderRadius: '10px', border: '1px solid #E8CDCD'}}>
                <CardContent>
                  <Typography variant="body6" sx={{color: '#363536', fontWeight: '500'}}>{card.title}</Typography><br/>
                  <Typography variant="body6" sx={{color: '#821810', fontWeight: '500'}}>{card.subtitle}</Typography><br/>
                  <Typography variant="body6" sx={{color: '#363536', fontWeight: '500'}}>{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Popular-Parts-Avatar-Videos */}
      <Box className="section sectionTB">
        <Typography variant="h4" sx={{fontWeight: 'bold',textAlign: 'center', mb: 4, fontFamily: '"Poppins", sans-serif', color: '#626162'}}>Popular PartsAvatar Videos</Typography>
        <Grid container spacing={5} justifyContent='center'>
          {videos.map((video, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{borderRadius: '10px', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}>
                <CardMedia component="img" height="300px" image={video.imgSrc} alt={video.title} sx={{objectFit: 'cover'}}/>
                <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                  <Typography variant="body6" sx={{color: '#7C8794', fontWeight: '500'}}>{video.title}</Typography>
                  <Button variant="contained" sx={{backgroundColor: '#810000', color: '#fff', borderRadius: '20px', textTransform: 'none', mt: 2, py: 1, fontSize: '18px'}}>Watch Now</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Auto-Parts-Expert-Help */}
      <Box className="section sectionTB" sx={{ textAlign: "center", py: 4, backgroundColor: "#fff" }}>
        <Typography variant="h4" sx={{fontWeight: 'bold', mb: 4, fontFamily: '"Poppins", sans-serif', color: '#626162'}}>Auto Parts Expert Help</Typography>

        <Grid container spacing={3} sx={{justifyContent: 'center'}}>
          {expertHelp.map((help, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box sx={{textAlign: 'center', px: 4}}>
                <Box component="img" src={help.icon} alt={help.title} sx={{height: '100px', mb: 2, fontFamily: '"Poppins", sans-serif'}}/>
                <Typography variant="h6" sx={{fontWeight: 'bold', mb: 1, fontFamily: '"Poppins", sans-serif'}}>{help.title}</Typography>
                <Typography variant="body6" sx={{fontWeight: 'bold', color: '#656565', fontFamily: '"Poppins", sans-serif'}}>{help.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Footer-top */}
      <Box className="section" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' }, py: 5, backgroundColor: '#810101', color: '#fff', mb: 3,  px: { xs: 3, md: 5 }, textAlign: { xs: 'center', md: 'left' }}}>
        <Box component="img" src={kite} alt="Kite Logo" sx={{ maxHeight: '100px', mb: { xs: 2, md: 0 } }}/>
        <Typography variant="h6" sx={{fontFamily: '"Poppins", sans-serif', lineHeight: '1.5', width: { xs: '100%', md: '60%' },}}>Lorem ipsum dolor sit amet consectetur. Mattis urna pharetra vivamus tellus semper convallis in et facilisis.</Typography>
        <Box sx={{ width: { xs: '100%', md: 'auto'}, mt: {xs: '0px', md: '20px'}}}>
          <TextField placeholder="Email*" variant="outlined" InputProps={{ endAdornment: ( <InputAdornment position="end"> 
            <MailOutlineIcon sx={{ color: '#810101' }} /> </InputAdornment>),}} sx={{ backgroundColor: '#fff', borderRadius: '5px', '& .MuiOutlinedInput-root': { borderRadius: '5px',}, width: '100%', mb: {xs: 2, md: 4}}}/>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
