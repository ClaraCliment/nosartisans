import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '.././index.css';
import Grid from '@mui/material/Grid';
// Pour le fetch de la liste des artisans
import useFetch from '../Utils/useFetch';
import Loading from '../Utils/Loading';
import ErrorMessage from '../Utils/ErrorMessage';
//import DATA from '../data/artisans.json';
import testAxios from '../Utils/testAxios';



export default function LesArtisans() {

  

  return <Box sx={{width:"100%", my:3}}>
                <Box sx={{ width: '100%', my:2 }}>
                    <Grid container rowSpacing={{xs: 1, sm: 2, md: 3}} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display:"flex", alignContent:"strech"}}>
                        {testAxios()}
                    </Grid>
                </Box>
            
    
         </Box>;
}

