import React from 'react';
import { Typography, Box, Stepper, Step, StepLabel, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HandshakeIcon from "@mui/icons-material/Handshake";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

function TrackOrderDetails() {
  const steps = ["Order Placed", "Packaging", "On The Road", "Delivered"];

  const activity = [
    { date: "23 Jan, 2021", time: "7:32 PM", text: "Your order has been delivered. Thank you for shopping at Clicon!", icon: <CheckCircleIcon color="success" />, },
    { date: "23 Jan, 2021", time: "2:00 PM", text: "Our delivery man (John Wick) has picked up your order for delivery.", icon: <PersonOutlinedIcon color="success" />, },
    { date: "22 Jan, 2021", time: "8:00 AM", text: "Your order has reached the last mile hub.", icon: <RoomOutlinedIcon color="success" />, },
    { date: "21 Jan, 2021", time: "5:32 AM", text: "Your order is on the way to (last mile) hub.", icon: <MapOutlinedIcon color="success" />, },
    { date: "20 Jan, 2021", time: "7:32 PM", text: "Your order is successfully verified.", icon: <CheckCircleIcon color="success" />, },
    { date: "19 Jan, 2021", time: "2:61 PM", text: "Your order has been confirmed.", icon: <CalendarTodayOutlinedIcon color="success" />, },
  ];

  return (
    <Box className="sectionTB section">
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: '"Poppins", sans-serif', mb: 4,}}> Track Order</Typography>
      <Box sx={{border: '2px solid #E4E7E9', padding: '30px 30px 20px 30px', borderRadius: '5px'}}>
      <Box sx={{border: '2px solid #F7E99E',padding: '26px', marginBottom: "32px", backgroundColor: '#FDFAE7', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}}}>
        <Box>
          <Typography variant='h6' sx={{ fontFamily: '"Poppins", sans-serif' }}>#96459761</Typography>
          <Typography variant='body6' sx={{ fontFamily: '"Poppins", sans-serif', color: '#475156'}}>4 Products • Order Placed in 17 Jan, 2021 at 7:32 PM</Typography>
        </Box>
        <Typography variant='h5'sx={{ fontFamily: '"Poppins", sans-serif', color: '#821810', fontWeight: '500'}}>$1199.00</Typography>
      </Box>

      <Box sx={{borderBottom: '1px solid #E4E7E9', pb: 3}}>
        <Typography variant="body6" sx={{ mb: 1, fontFamily: '"Poppins", sans-serif', color: '#475156'}}>Order expected arrival <span style={{fontWeight: 'bold'}}>23 Jan, 2021</span></Typography>
        <Stepper alternativeLabel activeStep={1} sx={{mt: 2}}>
          <Step>
            <StepLabel icon={<CheckCircleIcon sx={{color: "#821810"}}/>} sx={{'& .MuiStepLabel-label': { fontFamily: '"Poppins", sans-serif',}}}>Order Placed</StepLabel>
          </Step>
          <Step>
            <StepLabel icon={<Inventory2OutlinedIcon sx={{color: "#821810"}} />} sx={{'& .MuiStepLabel-label': { fontFamily: '"Poppins", sans-serif',}}}>Packaging</StepLabel>
          </Step>
          <Step>
            <StepLabel icon={<LocalShippingOutlinedIcon sx={{color: "#821810"}} />} sx={{'& .MuiStepLabel-label': { fontFamily: '"Poppins", sans-serif',}}}>On The Road</StepLabel>
          </Step>
          <Step>
            <StepLabel icon={<HandshakeIcon sx={{color: "#821810"}}  />} sx={{'& .MuiStepLabel-label': { fontFamily: '"Poppins", sans-serif',}}}>Delivered</StepLabel>
          </Step>
        </Stepper>
      </Box>

      <Box sx={{pt: 3}}>
        <Typography variant='h6' sx={{mb: 2, fontFamily: '"Poppins", sans-serif'}}>Order Activity</Typography>
        <List>
            {activity.map((item, idx)=>(
              <ListItem key={idx} alignItems='flex-start' sx={{gap: '20px'}}>
                <ListItemIcon sx={{height: '50px', width: '50px', backgroundColor: '#EAF7E9', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #D5F0D3'}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} secondary={`${item.date} at ${item.time}`} primaryTypographyProps={{fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem'}} secondaryTypographyProps={{fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem', color: '#77878F'}}/>
              </ListItem>
            ))}
        </List>
      </Box>
      </Box>
    </Box>
  )
}

export default TrackOrderDetails;
