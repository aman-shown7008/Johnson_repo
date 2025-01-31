import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function WarrantPolicy() {
  return (
    <Box className="section sectionTB">
      <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mb: 4}}>Warrant Policy</Typography>

      <Typography variant='body1' sx={{color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: 'justify'}}>
        Parts Avatar is an authorized seller of automotive parts from reputed manufacturers.
        The manufacturers that we work with back their product quality with warranties varying in duration and coverage depending on the product.
      </Typography>

      <Typography variant='body1' sx={{color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: 'justify'}}>
        While the usual process for claiming a warranty is to contact the manufacturer and work with
        them to get a repair/replacement, we want to simplify the process for our customers.
        <span style={{fontWeight: 'bold'}}> We offer complimentary assistance in claiming the warranty for up to 12 months from the date of purchase of the product.</span>
      </Typography>

      <Typography variant='h6' sx={{fontWeight: 'bold', color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mt: 2, mb: 1}}>Parts Avatar Assisted Warrant Claims:</Typography>

      <Typography variant='body1' sx={{color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: 'justify'}}>
        We offer a product exchange for up to 12 months from the date of purchase for any defects or malfunctions found in the parts purchased from us.
        We are committed to ensuring your satisfaction and are ready to assist you with the exchange process.
      </Typography>

      <Typography variant='body1' sx={{color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: 'justify'}}>
        To start your claim, simply reach out to our customer service team. They will help you initiate the claim smoothly.
        <span style={{fontWeight: 'bold'}}> We may require images or a short video of the flaw/defect.</span>
      </Typography>

      <Typography variant='body1' sx={{color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 0, textAlign: 'justify'}}>
        <span style={{fontWeight: 'bold'}}>Note: </span>Consumable items like oil, and regular wear and tear are not covered under the warranty policy.
        Parts Avatar only assists in claiming warranty for parts that are covered under the manufacturer’s warranty. 
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemText primary="1. Place a new order for the same product." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="2. Once you receive the new product, you may install it, but RETAIN THE BOX. Contact our customer service team at returns@johnson.ca or through live chat to initiate a
          return for the defective part and request an RMA (Return Merchandise Authorization) for the original order." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="3. Pack the defective part securely in the box of the new part." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="4. Ship the package to the following address: 6127 Shawson Dr, Mississauga, ON L5T 1E4." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
        </ListItem>
      </List>

      {/* Notes */}
      <Typography variant='h6' sx={{fontWeight: 'bold', color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mt: 2}}>Notes:</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText primary="1. If the same product is out of stock, you may order a different part that fits your vehicle. Parts Avatar will not be able to adjust the difference in price, if any, and would only be able to reimburse you for the original part’s price." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="2. If the same product is available, but the price has gone up, we will make our best effort to negotiate a higher value with the manufacturer.
          If approved, we will refund your replacement order to the extent of the extra amount that you paid compared to the original part." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="3. We inspect the part and the evidence provided by you to verify that the part is defective. We issue a refund of the original part, only once the verification is complete." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
        </ListItem>
      </List>

      
      {/* Warranty_Claims */}
      <Typography variant='h6' sx={{fontWeight: 'bold', color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mt: 2, mb: 1}}>Warranty Claims After 12 months:</Typography>
      <Typography variant='body1' sx={{color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 0, textAlign: 'justify'}}>
        If your part fails after 12 months of the purchase date, unfortunately we will not be able to assist you with the claim.
        If the manufacturer’s warranty covers any defects beyond 12 months, it should be processed directly with the manufacturer.
        Please reach out to the manufacturer for assistance regarding exchanges or refunds. If the manufacturer requests an invoice
        or proof of purchase, you may send your order confirmation email. Alternatively, you may contact us, and we will gladly provide the necessary documentation.
      </Typography>

    </Box>
  )
}

export default WarrantPolicy
