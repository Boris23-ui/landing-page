'use client';

import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';

const Email = () => {
const [isValid, setIsValid] = useState(true)
  const isEmail = (email: string) => {
console.log(email);

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validator = (email: string) => {
    const isValidEmail = isEmail(email);
    if (isValidEmail) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  return (
    <Box
      sx={{ marginBottom: "4.4rem" }}
      >
        <Input 
          sx={{ 
            border: `1px solid ${isValid ? "#B8C7ED" : "#FF5466"}`, 
            borderRadius: "2rem", 
            color: "#B8C7ED", 
            width: "26.3125rem",
            padding: "0.5rem 1rem",
            marginRight: "1rem"
          }}
          onChange={(e) => validator(e.target.value)}
          placeholder='Your email address...'
          />
          
          {isValid ? null : ( 
            <Typography sx={{ color: "#FF5466" }} >Please provide a valid email address</Typography>)
           }
          


        <Button 
          sx={{ 
            backgroundColor: "#4C7BF3", 
            color: "#FFFFFF",
            borderRadius: "2rem",
            padding: "0.5rem 1rem",
            width: "200px",
            height: "3.5rem" 
            }} >
          Notify Me
        </Button>
    </Box>
  );
};

export default Email;