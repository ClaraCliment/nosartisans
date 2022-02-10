import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {

  const [ mot, setMot ] = useState("");

  const handleChange = (event) => {
    setMot(event.target.value);
    console.log(mot);
  };
  

  return (
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5, ml:2 }} />
        <TextField onChange={handleChange} id="input-with-sx" label="Rechercher" variant="standard" />
      </Box>
  );
}
