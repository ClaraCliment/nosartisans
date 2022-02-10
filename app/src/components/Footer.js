import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

export default function Footer() {
  return <Box sx={{textAlign:"center", width:"100%", heigth:"20%", bottom:0, py:2, zIndex: 3, bgcolor:"primary.main", color:"fourth.main" }}>
            <Typography variant="body2" sx={{mt:4, mb:1, px:2}}>Projet réalisé par Clara Climent durant le stage chez BeCode</Typography>
            <Box sx={{mt:2, mb:1}}>
            <Button sx={{":hover": {bgcolor:"none"}, px:2}} href="https://github.com/ClaraCliment" startIcon={<GitHubIcon />} variant="text" color="fourth">Clara Climent</Button>
            </Box>
            <Box sx={{mt:2, mb:1}}>
            <Button sx={{":hover": {bgcolor:"none"}, px:2}} href="https://picsum.photos/" variant="text" color="fourth">Thanks to picsum for the photos</Button>
            </Box>

            
         </Box>;
}

