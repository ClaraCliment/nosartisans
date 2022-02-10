import React from 'react';
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import ButtonBasic from '../components/buttons/BasicButton';
// import ButtonTest from '../components/buttons/ButtonTest';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Banner from '../components/Banner';
import Container from '@mui/material/Container';
import ArtisanDetailsListe from '../components/ArtisanDetailsListe';

export default function ArtisanDetails() {
  return <Box className="Artisan" sx={{width:"100%"}}>
            <Banner title="Fiche technique" text="tous les infos officielles de cet artisan" />
            <Container maxWidth="sm" sx={{minWidth:"80%", display:"flex", justifyContent:"center"}}>
                <ArtisanDetailsListe />
                
            </Container >
                
         </Box>;
}

