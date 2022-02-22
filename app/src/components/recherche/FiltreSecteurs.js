import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { ArtisanContext } from '../../context/ArtisanContext';

export default function FiltreSecteurs({setSearch}) {

  const [actualValue, setActualValue] = useState("Tous");
  
  const handleChange = (event) => {
    setActualValue(event.target.value);
    if(event.target.value === "Tous") {
      setSearch("");
    }else{
      setSearch(`/secteur/${event.target.value}`);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{boderRadius:"0"}}>
        <InputLabel id="filtre-secteur" sx={{borderRadius:"0", fontWeight: "400"}}>Secteurs</InputLabel>
        <Select
          sx={{boderRadius:"0"}}
          labelId="demo-simple-select-label"
          id="secteur"
          label="Secteur"
          value ={actualValue}
          onChange={handleChange}
          onClick={(e) =>  {e.preventDefault()}}
        >
          <MenuItem value={"Tous"}>Tous</MenuItem>
          <MenuItem value={"Produits alimentaires"}>Produits alimentaires</MenuItem>
          <MenuItem value={"Bois"}>Bois</MenuItem>
          <MenuItem value={"Textile, cuir et mode"}>Textile, cuir et mode</MenuItem>
          <MenuItem value={"Arts graphiques"}>Arts graphiques</MenuItem>
          <MenuItem value={"Métaux"}>Métaux</MenuItem>
          <MenuItem value={"Ameublement et décoration d'intérieur"}>Ameublement et décoration d'intérieur</MenuItem>
          <MenuItem value={"Produits de luxe : bijouterie, horlogerie et parfum"}>Produits de luxe : bijouterie, horlogerie et parfum</MenuItem>
          <MenuItem value={"Construction, réparation, rénovation"}>Construction, réparation, rénovation</MenuItem>
          <MenuItem value={"Musique"}>Musique</MenuItem>
          <MenuItem value={"Céramique"}>Céramique</MenuItem>
          <MenuItem value={"Papier"}>Papier</MenuItem>
          <MenuItem value={"Pierre"}>Pierre</MenuItem>
          <MenuItem value={"Mécanique (Automobile et cycles)"}>Mécanique (Automobile et cycles)</MenuItem>
          <MenuItem value={"Service aux personnes et aux animaux"}>Service aux personnes et aux animaux</MenuItem>
          <MenuItem value={"Fleurs et jardins"}>Fleurs et jardins</MenuItem>
          <MenuItem value={"Mécanique (Automobile et cycles)"}>Mécanique (Automobile et cycles)</MenuItem>
          <MenuItem value={"autre"}>Autre</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
