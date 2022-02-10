import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '.././index.css';
import Divider from '@mui/material/Divider';
import Titre from './Titre';
import Typography from '@mui/material/Typography';
import FiltreSecteurs from './recherche/FiltreSecteurs';
import SearchBar from './recherche/SearchBar';
import Grid from '@mui/material/Grid';
import FicheArtisan from './FicheArtisan';
//import axios from "axios";

// fetch artisans 
import useFetch from '../Utils/useFetch';
import Loading from '../Utils/Loading';
import ErrorMessage from '../Utils/ErrorMessage';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ').map(word => word[0]).join('')}`,
    };
  }

  

export default function LesArtisans() {

  const {data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/api/artisans`
  );

  if (loading) return <Loading />;

  if (error) return <ErrorMessage />;

  

  return <Box sx={{width:"100%", my:3}}>
            {/** On donne aux titres une autre typo, donc un autre thème */}
            <Titre titre="Découvrez nos artisans belges"  color="secondary" />
            {/** Petit texte sur les artisans */}
            <Typography sx={{my:2}} variant="subtitle1" gutterBottom component="div">
            Ici vous trouverez tous les artisans belges répertoriés par le SPF Economie, vous pouvez filtrer votre recherche par secteur ou encore par région. Bonne visite!
            </Typography>

            <Box sx={{width:"100%"}}>
                <Box sx={{display:"flex", justifyContent:"space-between", flexDirection:"row", mb:2}}>
                    <FiltreSecteurs />
                    <SearchBar />
                </Box>
                <Divider />
                <Box sx={{ width: '100%', my:2 }}>
                    <Grid container rowSpacing={{xs: 1, sm: 2, md: 3}} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display:"flex", alignContent:"strech"}}>
                    { data ? 
                      data.slice(0, 100).map(artisan => {
                            return <Grid item xs={12} sm={12} md={6} lg={4} sx={{heigth:"100%"}}  key={artisan._id}>
                                      <FicheArtisan id={artisan._id} path={artisan._id} avatar={stringAvatar} nom={artisan.Nom} name={artisan.Nom} region={artisan.Localite} secteur={artisan.Secteur}/>
                                    </Grid>}) 
                      : <Typography>Ops, on a un soucis! </Typography>}
                                        
                    </Grid>
                    <Grid container sx={{display:"flex", justifyContent:"center"}}>
                      <Button color="primary" variant="contained" sx={{letterSpacing: 5, borderRadius:"0", fontWeight: "400", m:4}}>Voir plus</Button>
                    </Grid>
                </Box>
            
            </Box>
        
        </Box>;

}

