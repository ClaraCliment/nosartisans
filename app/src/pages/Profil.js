import React from 'react';
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
import Banner from '../components/Banner';
import Container from '@mui/material/Container';
import ProfilUser from '../components/ProfilUser';

function Profil() {
  return <Box className="Admin" sx={{width:"100%"}}>
            <Banner title="Espace utilisateur" text="actualiser ou supprimer compte" />
            <Container maxWidth="sm" sx={{minWidth:"80%", my:4}}>
                {/** Profil user */}
                <ProfilUser/>
                
                {/** Partie gestion des articles déjà existants */}
                
            </Container >
      
        </Box>;
}

export default Profil;
