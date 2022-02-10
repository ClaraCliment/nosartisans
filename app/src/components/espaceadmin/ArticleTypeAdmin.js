import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import dayjs from 'dayjs';
import Divider from '@mui/material/Divider';
//import Chip from '@mui/material/Chip';
//import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Book from '../../icons/Book';
import CircleIcon from '@mui/icons-material/Circle';

function ArticleTypeAdmin(props){
  return <Box sx={{
    maxWidth:"600px",
    marginRight:"auto",
    marginLeft:"auto",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    my:2
  }}>
    <Typography className="titre" variant="h4" gutterBottom component="div" sx={{mt:4}} >
        {props.titre}
      </Typography>
      <Typography className="sousTitre" variant="subtitle1" gutterBottom component="div" sx={{color:"secondary.main"}} >
        {(props.sousTitre).toUpperCase()}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom sx={{mb:2}}>
        {props.date}
      </Typography>
      
      {/** Déco divider + lettre */}
      {/* <Divider textAlign="right">
        <Chip label="A" color="primary" />
      </Divider> */}
      <Divider textAlign="right">
        <Book />
      </Divider>

      <Typography className="paragraphe" variant="body1" gutterBottom sx={{lineHeight:"1.8", mt:2}}>
        {props.paragraphe1}
      </Typography>
      <Typography className="accroche" variant="subtitle1" gutterBottom component="div" sx={{fontWeight:"bold", color:"secondary"}}>
      {props.accroche}
      </Typography>
      <Typography className="paragraphe" variant="body1" gutterBottom sx={{lineHeight:"1.8"}}>
        {props.paragraphe2}
      </Typography>
      <Typography className="paragraphe" variant="body1" gutterBottom sx={{lineHeight:"1.8"}}>
        {props.paragraphe3}
      </Typography>
      <Typography className="citation" variant="subtitle1" gutterBottom component="div" sx={{fontStyle:"italic", textDecoration:"underline overline #A3664F", textDecorationThickness:"4px", m:3 }}>
        {props.citation}
      </Typography>
      <Typography className="paragraphe" variant="body1" gutterBottom sx={{lineHeight:"1.8"}}>
        {props.paragraphe4}
      </Typography>
      <Typography className="paragraphe" variant="body1" gutterBottom sx={{lineHeight:"1.8"}}>
        {props.paragraphe5}
      </Typography>
      <Typography className="paragraphe" variant="body1" gutterBottom sx={{lineHeight:"1.8"}}>
        {props.paragraphe6}
      </Typography>
      <Typography className="signature" variant="body2" gutterBottom  sx={{fontWeight:"bold", mb:3}}>
        {props.signature } 
      </Typography>
      <CircleIcon  color="primary" sx={{mb:3}} />
     


  </Box>;
}

export default ArticleTypeAdmin;
