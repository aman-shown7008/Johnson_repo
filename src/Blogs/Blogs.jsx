import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip} from "@mui/material";
import blog1 from "../images/blogs1.png";
import profileImg from "../images/blogProfImg.png";

const blogs = [
  { image: blog1, category: "News", title: "Meet your Glide Certified community challenge winners.", description: "Last month we announced Glide’s first level of certification. To celebrate the launch, we challenged our Glide community members...", author: "Andy Claremont", date: "22 Nov 2023", profileImage: profileImg, },
  { image: blog1, category: "Learn", title: "Create custom IT asset management software that is tailor-made.", description: "Build an asset management solution that helps your IT team keep devices, software, licenses, and their associated costs organized...", author: "Wren Noble", date: "16 Nov 2023", profileImage: profileImg, },
  { image: blog1, category: "Tech", title: "You need to be building business apps with adaptive design.", description: "Build software for your team that works on mobile without creating a mountain of extra work for yourself...", author: "Tristan L’Abbé", date: "15 Nov 2023", profileImage: profileImg, },
  { image: blog1, category: "Tools", title: "The Power Apps alternative you need to expand your app-building capabilities.", description: "Add Glide to your no code app toolbox so more of your team can participate ...", author: "Wren Noble", date: "16 Nov 2023", profileImage: profileImg, },
  { image: blog1, category: "Learn", title: "Building Glide Apps on SQL Data.", description: "Introducing SQL data sources in Glide: Build powerful custom apps and interfaces on top of your existing SQL data sources, including MySQL...", author: "Andy Claremont", date: "6 Nov 2023", profileImage: profileImg, },
  { image: blog1, category: "Learn", title: "Build a Custom IT Help Desk in Under an Hour.", description: "Create and fully customize your own IT ticketing software without having to code a single line...", author: "Wren Noble", date: "3 Nov 2023", profileImage:  profileImg, },
];

const categoryStyles = {
  News: { backgroundColor: "#381E2C", color: "#F3B2D5", },
  Learn: { backgroundColor: "#073940", color: "#18BED4", },
  Tech: { backgroundColor: "#541A0B", color: "#FFA188", },
  Tools: { backgroundColor: "#2D281D", color: "#BFB5A0", },
}

function Blogs() {
  return (
    <Box className="section sectionTB">
      <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mb: 4}}>Blogs</Typography>
      <Grid container spacing={6}>
        {blogs.map((blog, idx) => {
          const styles = categoryStyles[blog.category] || {};
          return (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{borderRadius: '12px', overflow: 'hidden', boxShadow: 2, minHeight: '460px'}}>
              <CardMedia component="img" image={blog.image} alt={blog.title} sx={{height: '180px', objectFit: 'fill'}}/>
              <CardContent>
                <Chip label={blog.category} sx={{backgroundColor: styles.backgroundColor || "#073940", color: styles.color || "#18BED4", fontFamily: '"Poppins", sans-serif', fontSize: '1rem', borderRadius: '7px', mb: 1}}/>
                <Typography variant='h6' sx={{fontWeight: 'bold', fontFamily: '"Poppins", sans-serif'}}>{blog.title}</Typography>
                <Typography variant='body1' sx={{color: '#7C7C86', fontFamily: '"Poppins", sans-serif', py: 2}}>{blog.description}</Typography>
                <Box sx={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  <CardMedia component="img" image={blog.profileImage} alt={blog.title} sx={{height: '50px', width: '50px',objectFit: 'fill', borderRadius: '50px'}}/>
                  <Typography variant='body1' sx={{fontFamily: '"Poppins", sans-serif'}}><span style={{fontWeight: 'bold'}}>{blog.author}</span> <span style={{color: '#7C7C86'}}>{ blog.date}</span></Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          );
        })}
      </Grid>
    </Box>
  )
}

export default Blogs
