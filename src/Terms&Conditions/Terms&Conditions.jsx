import React from 'react';
import { Box, Typography, Paper, ListItem, ListItemText, List } from "@mui/material";

function TermsConditions() {
  return (
    <Box className="section sectionTB">
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2B2B2B", fontFamily: '"Poppins", sans-serif', textAlign: "center", mb: 4,}}>Terms & Conditions</Typography>

      <Box>
        <Typography variant='body1' sx={{color: '#5F6C72', fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: 'justify'}}>
          Lorem ipsum dolor sit amet. The graphic and typographic operators know
          this well; in reality, all the professions dealing with the universe
          of communication have a stable relationship with these words. What is
          it? Lorem ipsum is a dummy text without any sense.
        </Typography>
        <Typography variant='body1' sx={{ color: "#5F6C72", fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: "justify",}}>
          It is a sequence of Latin words that, as they are positioned, do not
          form sentences with a complete sense but give life to a text useful
          to fill spaces that will subsequently be occupied from ad hoc texts
          composed by communication professionals.
        </Typography>
        <Typography variant='body1' sx={{ color: "#5F6C72", fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: "justify",}}>
          It is certainly the most famous placeholder text even if there are
          different versions distinguishable from the order in which the Latin
          words are repeated.
        </Typography>
        <Typography variant='body1' sx={{ color: "#5F6C72", fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: "justify",}}>
          Lorem ipsum contains the typefaces more in use, an aspect that
          allows you to have an overview of the rendering of the text in
          terms of font choice and font size .
        </Typography>
        <Typography variant='body1' sx={{ color: "#5F6C72", fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: "justify",}}>
          When referring to Lorem ipsum, different expressions are used,
          namely fill text , fictitious text , blind text or placeholder text :
          in short, its meaning can also be zero, but its usefulness is so clear
          as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.
        </Typography>
        <Typography variant='body1' sx={{ color: "#5F6C72", fontFamily: '"Poppins", sans-serif', lineHeight: 1.8,mb: 1, textAlign: "justify",}}>
          When creating digital or print designs, using placeholder text ensures
          that the focus remains on the layout and design elements rather than
          the content. Here are some key reasons to use a Lorem Ipsum generator:
        </Typography>

        <Typography variant="h6" sx={{ color: "#2B2B2B", fontFamily: '"Poppins", sans-serif', mt: 2}}>Key Reasons to Use:</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="1. Focus on Visual Design: Lorem Ipsum keeps the viewer's attention on the design rather than the words." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="2. Avoid Content Delays: Placeholder text lets you move ahead without delays." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="3. Consistent Formatting: Ensures styles and alignments remain consistent." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="4. Versatility: Can be used anywhere as a temporary text filler." primaryTypographyProps={{ fontFamily: '"Poppins", sans-serif', fontSize: "16px", color: "#5F6C72", lineHeight: 1.8,}}/>
          </ListItem>
        </List>

        <Typography variant='body1' sx={{ color: "#5F6C72", fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, my: 1, textAlign: "justify",}}>
          Lorem ipsum dolor sit amet . The graphic and typographic operators know this well,
          in reality all the professions dealing with the universe of communication have a stable
          relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.
        </Typography>
        <Typography variant='body1' sx={{ color: "#5F6C72", fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: "justify",}}>
          It is a sequence of Latin words that, as they are positioned,
          do not form sentences with a complete sense, but give life to a test
          text useful to fill spaces that will subsequently be occupied from ad
          hoc texts composed by communication professionals.
        </Typography>
        <Typography variant='body1' sx={{ color: "#5F6C72", fontFamily: '"Poppins", sans-serif', lineHeight: 1.8, mb: 1, textAlign: "justify",}}>
          It is certainly the most famous placeholder text even if there are
          different versions distinguishable from the order in which the Latin words are repeated.
        </Typography>
      </Box> 
    </Box>
  )
}

export default TermsConditions;
