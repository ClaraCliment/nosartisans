import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./Banner.css";

export default function Banner(props) {
  return (
    <Box sx={{ width: "100%", bgcolor:"primary.main", py:5, textAlign:"center", color:"#ECE5DC", letterSpacing: "2px", lineHeight:"normal"}}>
      <Typography className="title" variant="h5" gutterBottom component="div" sx={{mb:2, px:2}} >
        {props.title}
      </Typography>
      
      <Typography variant="body1" gutterBottom sx={{fontWeight:"200", px:2}}>
        {props.text}
      </Typography>
     
    </Box>
  );
}
