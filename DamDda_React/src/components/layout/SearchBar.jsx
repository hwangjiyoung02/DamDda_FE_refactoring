import React from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  const handleSearchChange = (event) => {
    // Handle search input change
    console.log(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        border:null,
      }}
    >
      <TextField
        placeholder="새로운 일상이 필요하신가요?" // Placeholder text from the image
        onChange={handleSearchChange}
        variant="outlined"
  
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          style: {
            borderRadius: '50px', // Full rounded border
            padding: '0 12px', // Adjust padding to center content
            height: '100%', // Ensure the height matches the container
            display: 'flex',
            alignItems: 'center', // Vertically center the content
          },
        }}
        sx={{
          width: 550,
          border: '2px solid #2bbdbd', // Teal border color
          borderRadius: '50px', // Full rounded corners
          backgroundColor: '#fff', // White background
          height: '56px', // Height to match the input field in the image
          fontSize: '1rem', // Increase font size for placeholder
          '& .MuiInputBase-input::placeholder': {
            color: '#b0b0b0', // Gray placeholder color
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Hide default border
            },
            '&:hover fieldset': {
              borderColor: '#2bbdbd', // Border color on hover
            },
          },
        }}
      />
    </Box>
  );
};
