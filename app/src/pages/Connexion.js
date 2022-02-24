import React from 'react';
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
import Banner from '../components/Banner';
import Container from '@mui/material/Container';
import ConnexionForms from '../components/ConnexionForms';

function Connexion( { setIsLogged, setIsAdmin, setUserFirstName } ) {
  return <Box className="Home" sx={{width:"100%"}}>
            <Banner title="Si vous n'êtes pas déjà client..." text="créez un compte et profitez d'un tas d'avantages!" />
            <Container maxWidth="sm" sx={{minWidth:"80%"}}>
                <ConnexionForms  setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} setUserFirstName={setUserFirstName} />
            </Container >
                
        </Box>;
}

export default Connexion;
