import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Banner from '../components/Banner';
import Container from '@mui/material/Container';
import CoupsdeCoeur from '../components/CoupsdeCoeur';
import LesArtisans from '../components/LesArtisans';

function Home() {

  return <Box className="Home" sx={{width:"100%"}}>
            <Banner title="Bienvenus au c&#339;ur de l'artisanat belge" text="savoir-faire & authenticit√©" />
            <Container maxWidth="sm" sx={{minWidth:"80%"}}>
                <CoupsdeCoeur />
                <Divider />
                <LesArtisans />      
            </Container >
                
         </Box>;
}

export default Home;
