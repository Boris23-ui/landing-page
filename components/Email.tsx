'use client';

import { Box, Button, Input } from '@mui/material';
import React from 'react';

const Email = () => {
  return (
    <Box
      sx={{ marginBottom: "4.4rem" }}
      >
        <Input 
          sx={{ 
            border: "1px solid #B8C7ED", 
            borderRadius: "2rem", 
            color: "#B8C7ED", 
            width: "26.3125rem",
            padding: "0.5rem 1rem",
            marginRight: "1rem"
          }}
          placeholder='Your email address...'
          />
        <Button 
          sx={{ 
            backgroundColor: "#4C7BF3", 
            color: "#FFFFFF",
            borderRadius: "2rem",
            padding: "0.5rem 1rem",
            width: "200px",
            height: "3.5rem" 
            }} >

        </Button>
    </Box>
  );
};

export default Email;