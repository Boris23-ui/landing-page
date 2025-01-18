import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";
import Email from "@/components/Email";



const Home = () => {
  return (

    <Box
      sx={{ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image 
        src="/images/logo.svg" 
        alt="logo" 
        width={90} 
        height={39}  
        style={{ margin: "2.5rem 0" }}
      />
      
      <Typography 
        variant="h1" 
        sx={{ 
          color: "#969696",
          fontWeight: 400,
          
          }}
      >
        We are launching 
        <span 
          style={{ 
            color: "#15202A" ,
            fontWeight:600 
            }}> soon!</span>
      </Typography>
      
      <Typography 
      sx={{ 
        color: "#15202A", 
        fontSize: "1.25rem",
        marginBottom: "2.5rem",
        marginTop: "1rem",
        }} 
      >
        Subscribe and get notified
      </Typography>

    <Email />

    <Image 
      src="/images/illustration-dashboard.png" 
      alt="example" 
      width={640} 
      height={383} 
      />
    </Box>
    
  );
};

export default Home;
