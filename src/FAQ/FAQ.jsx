import React from 'react';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  { question: "What types of automotive parts does Atren offer?", answer: "Atren provides a wide range of high-quality automotive parts, including engine components, braking systems, suspension parts, and more. We cater to various vehicle types, ensuring durability and performance.", },
  { question: "Where is Atren located?", answer: "Atren is based in Canada, but we serve both domestic and international markets with our premium automotive parts.", },
  { question: "Are Atren parts compatible with all vehicle brands?", answer: "Yes, our products are designed to be compatible with a wide range of vehicle brands and models. We ensure that our parts meet industry standards for universal fit and functionality.", },
  { question: "What is Atren’s quality assurance process?", answer: "At Atren, every product undergoes a rigorous quality control process, including multiple tests for durability, safety, and performance, ensuring the highest standards are met.", },
  { question: "Does Atren offer international shipping?", answer: "Yes, Atren ships its products globally. We have a strong logistics network that ensures timely and safe delivery to international customers.", },
  { question: "How can I contact Atren for support or inquiries?", answer: "You can contact us through our website or reach out to our customer support team via email or phone. We are committed to providing prompt assistance and support.", },
  { question: "Does Atren offer warranties on its parts?", answer: "Yes, Atren offers warranties on most of its products. The warranty details vary depending on the product, so please refer to the specific product page or contact customer service for more information.", },
];

function FAQ() {
  return (
    <Box className="section service sectionTB">
      <Typography variant='h4' sx={{fontWeight: 'bold', color: '#2B2B2B', fontFamily: '"Poppins", sans-serif', textAlign: 'center', marginBottom: '10px', mb: 4}}>Frequently Asked <span style={{color: '#810000'}}>Question</span></Typography>
      
      {faqData.map((faq, idx) => (
        <Accordion key={idx} sx={{mb:3}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${idx}-content`} id={`panel${idx}-content`}>
            <Typography variant='h6' sx={{fontWeight: 'bold', color: '#000', fontFamily: '"Poppins", sans-serif', mb: 1}}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body6' sx={{fontWeight: '500', color: '#8F8F8F', fontFamily: '"Poppins", sans-serif'}}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default FAQ;