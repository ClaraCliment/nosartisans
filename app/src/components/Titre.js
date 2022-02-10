import React from 'react';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme2 } from '../Theme/Theme2';

function Titre(props) {
  return <ThemeProvider theme={theme2}>
            <Typography color={props.color} className="title" variant="h5" gutterBottom component="div" sx={{mb:2}} >
                {props.titre} 
            </Typography>
        </ThemeProvider>;
}

export default Titre;
