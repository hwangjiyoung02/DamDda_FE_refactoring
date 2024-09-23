import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export const CollaborationSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        background: 'linear-gradient(90deg, #7F7F7F 50%, #A6C9FF 100%)',
        color: 'white',
        borderRadius: '10px',
        height:'200px',
        width:'70%',
        
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
        진행자와 함께 협업하기
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: '#000',
          fontWeight: 'bold',
          padding: '10px 20px',
          borderRadius: '30px',
        }}
      >
        바로 가기
      </Button>
    </Box>
  );
};
