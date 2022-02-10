import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Banner from '../components/Banner';
import Container from '@mui/material/Container';
import NouvelArticle from '../components/espaceadmin/NouvelArticle';
import GestionArticles from '../components/espaceadmin/GestionArticles';
import Typography from '@mui/material/Typography';
import Titre from '../components/Titre';

function Admin() {
  return <Box className="Admin" sx={{width:"100%"}}>
            <Banner title="Espace administrateur" text="création & gestion des articles" />
            <Container maxWidth="sm" sx={{minWidth:"80%", my:4}}>
                {/** Partie écriture nouvel article */}
                <Box sx={{textAlign:"center"}}>
                <Titre titre="Rédigez ici un nouvel article" color="secondary"  />
                </Box>
                <NouvelArticle />
                <Divider  sx={{my:3}} />
                {/** Partie gestion des articles déjà existants */}
                <Box sx={{textAlign:"center"}}>
                <Titre titre="Retrouvez vos articles par titre et effacez celui que vous souhaitez" color="secondary"  />
                </Box>
                <GestionArticles />
                
            </Container >
      
        </Box>;
}

export default Admin;
