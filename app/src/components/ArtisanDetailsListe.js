import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import Grid from '@mui/material/Grid';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

// fetch artisans 
import useFetch from '../Utils/useFetch';
import Loading from '../Utils/Loading';
import ErrorMessage from '../Utils/ErrorMessage';

// icons
import Secteur from '../icons/Secteur';
import Langue from '../icons/Langue';
import Adresse from '../icons/Adresse';
import Telephone from '../icons/Telephone';
import Email from '../icons/Email';

function getFirstLetters(str) {
  const firstLetters = str
    .split(' ')
    .map(word => word[0])
    .join('');

  return firstLetters;
}


function ArtisanDetailsListe() {

    let { id } = useParams();

    const {data, loading, error } = useFetch(
      `${process.env.REACT_APP_API_URL}/api/artisans/${id}`
    );
  
    if (loading) return <Loading />;
  
    if (error) return <ErrorMessage />;
  

  return <Box>

            { data? (<Card sx={{ display:"flex", flexDirection:"row", alignItems:"strech", my:6, bgcolor:"rgba(236, 229, 220, .5)", width:"100%"}}>
      
                  
                  <CardContent sx={{display:"flex", width:"100%", heigth:"100%", flexDirection:"column", justifyContent:"space-between", alignContent:"space-between", p:4}}>
                      
                      <Box >
                      <Avatar sx={{ aligSelf:"center", bgcolor: "primary.main", width: 100, height: 100, fontWeight: "200",fontSize:"30px", mx: "auto"}}>{getFirstLetters(data.Nom)}</Avatar>
                        <Typography gutterBottom variant="h5" component="div" color="secondary.main" sx={{mb:3, mt:2, textAlign:"center"}}  >
                                {data.Nom} 
                        </Typography>
                        <Divider />
                        
                        <TableContainer sx={{my:2}}>
                          <Table aria-label="details artisan">
                            <TableBody>
                                <TableRow >
                                      <TableCell component="th" scope="row" sx={{width:"35px", borderStyle:"none", p:2}}>
                                        <Secteur />
                                      </TableCell>
                                      <TableCell align="left" sx={{borderStyle:"none", padding:"0"}}>{data.Secteur}</TableCell>
                                </TableRow>
                                <TableRow >
                                      <TableCell component="th" scope="row" sx={{width:"35px", borderStyle:"none", p:2}}>
                                        <Langue />
                                      </TableCell>
                                      <TableCell align="left"  sx={{borderStyle:"none", padding:"0"}}>{data.Langue}</TableCell>
                                </TableRow>
                                <TableRow >
                                      <TableCell component="th" scope="row" sx={{width:"35px", borderStyle:"none", p:2}}>
                                        <Adresse />
                                      </TableCell>
                                      <TableCell align="left"  sx={{borderStyle:"none", padding:"0"}}>{data.Adresse + " " + data.Numero}</TableCell>
                                </TableRow>
                                <TableRow >
                                      <TableCell component="th" scope="row" sx={{width:"35px", borderStyle:"none", p:2}}>
                                        
                                      </TableCell>
                                      <TableCell align="left"  sx={{borderStyle:"none", padding:"0"}}>{data.Localite}</TableCell>
                                </TableRow>
                                <TableRow >
                                      <TableCell component="th" scope="row" sx={{width:"35px", borderStyle:"none", p:2}}>
                                        <Telephone />
                                      </TableCell>
                                      {data.Telephone? 
                                      <TableCell align="left"  sx={{borderStyle:"none", padding:"0"}}>{data.Telephone}</TableCell>
                                      : <TableCell align="left"  sx={{borderStyle:"none", padding:"0"}}>Donnée non fournie</TableCell>}
                                </TableRow>
                                <TableRow >
                                      <TableCell component="th" scope="row" sx={{width:"35px", borderStyle:"none", p:2}}>
                                        <Email />
                                      </TableCell>
                                      {data.Email? 
                                      <TableCell align="left"  sx={{borderStyle:"none", padding:"0"}}>{data.Email}</TableCell>
                                      : <TableCell align="left"  sx={{borderStyle:"none", padding:"0"}}>Donnée non fournie</TableCell>}
                                </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>

                      </Box>


                      <CardActions>

                         {/** Aller vers leur site ou go back */}
                        <Box sx={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems: "flex-end", alignSelf:"flex-end", mt:2, flexWrap:"wrap"}}>
                          <Button 
                            variant="text" 
                            startIcon={<ArrowBackIosIcon />} 
                            sx={{m:1}}
                            href="/"
                            >
                            Retour
                          </Button>

                          {data.web? 
                            <Button 
                            sx={{m:1}}
                            startIcon={<LightbulbIcon />}
                            href={data.web} 
                            color="secondary" 
                            variant="outlined" 
                            endIcon={<ArrowForwardIosIcon />} 
                            size="small" >Visiter le site de l'artisan</Button> 
                            : 
                            <Button 
                            sx={{m:1}}
                            disabled
                            startIcon={<SentimentVeryDissatisfiedIcon />} 
                            color="secondary" 
                            variant="outlined" 
                            endIcon={<ArrowForwardIosIcon />} 
                            size="small" >Site web inconnu</Button> }
                            </Box>
                        
                      </CardActions>    

                  </CardContent>
                  
            </Card>)

            : <Typography>Ops, on a un soucis d'affichage!</Typography>}

        </Box>;
}

export default ArtisanDetailsListe;
