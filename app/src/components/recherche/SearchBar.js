import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({setSearch}) {

  const handleChange = (event) => {
    if((event.target.value).length < 1) {
      setSearch("");
    } else {
      setSearch(`/mot/${event.target.value}`);
    }
  };
  

  return (
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5, ml:2 }} />
        <TextField onChange={handleChange} id="input-with-sx" label="Chercher" variant="standard" />
      </Box>
  );
}
