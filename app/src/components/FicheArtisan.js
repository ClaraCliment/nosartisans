import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClassIcon from '@mui/icons-material/Class';
import Grid from '@mui/material/Grid';

export default function FicheArtisan(props) {

  return (
    <Card sx={{ height:"100%", display:"flex", flexDirection:"row", alignItems:"strech"}}>
      <Stack direction="row" sx={{m:2}}>
        <Avatar {...(props.avatar(props.nom))} />
      </Stack>
      
      <CardContent sx={{display:"flex", width:"100%", flexDirection:"column", justifyContent:"space-between", alignContent:"space-between"}}>
          
          <Box >
            <Typography gutterBottom variant="h5" component="div"  >
                    {props.nom}
            </Typography>
            <Grid container sx={{ color: 'text.primary' }}>
                <Grid item xs={1} sx={{textAlign:"left"}}>
                    <ClassIcon color="primary" />
                </Grid>
                <Grid item xs={11}>
                    <Typography sx={{textAlign:"left", pl:1}}> {props.secteur}</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ color: 'text.primary' }}>
                <Grid item xs={1} sx={{textAlign:"left"}}>
                    <LocationOnIcon color="primary" />
                </Grid>
                <Grid item xs={11}>
                    <Typography sx={{textAlign:"left", pl:1}}> {props.region}</Typography>
                </Grid>
            </Grid>
          </Box>

          <CardActions sx={{width:"100$", justifyContent:"end"}} >
            <Button href={"/artisan" + props.path} sx={{alignSelf:"flex-end"}} color="secondary" variant="outlined" endIcon={<ArrowForwardIosIcon />} size="small" >En savoir plus</Button>
          </CardActions>    

      </CardContent>
      
    </Card>
  );
}
