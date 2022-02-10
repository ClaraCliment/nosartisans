import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Banner from '../components/Banner';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Titre from '../components/Titre';
import BasicButton from '../components/buttons/BasicButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Carrousel from '../components/Carrousel';
//import { Redirect } from 'react-router-dom';
import ArticleTypeAdmin from '../components/espaceadmin/ArticleTypeAdmin';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
//import dayjs from 'dayjs';

// fetch artisans 
import useFetch from '../Utils/useFetch';
import Loading from '../Utils/Loading';
import ErrorMessage from '../Utils/ErrorMessage';

function Lactu() {

    const {data, loading, error } = useFetch(
        `${process.env.REACT_APP_API_URL}/api/articles`
      );
    
      if (loading) return <Loading />;
    
      if (error) return <ErrorMessage />;

    
  return <Box className="Home" sx={{width:"100%"}}>
            <Banner title="Découvrez l'actu de la semaine" text="promos, nouveautés, évènements, ..." />

            <Card sx={{ width: "100%" }}>
            <CardMedia
                component="img"
                height="300"
                image="https://picsum.photos/id/284/1500/1500"
                alt="Paella dish"
                sx={{maxHeight: { xs: 150, md: 300 }}}
            />
            </Card>

            <Container maxWidth="sm" sx={{minWidth:"80%", my:3}}>
                <Grid container spacing={2} sx={{width:"100%", display:"flex", flexDirection:"row", my:3}}>
                    <Grid item xs={12} sm={12} md={3} lg={2} >
                        <Avatar sx={{height:"125px", width:"125px"}} alt="John Blair" src="https://picsum.photos/id/45/200/200" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={10} >
                    <Titre titre="Lorem ipsum"  color="secondary" />
                    <Typography sx={{my:2}} variant="subtitle1" gutterBottom component="div">
                        Nulla vestibulum, velit et dapibus accumsan, leo libero pulvinar dolor, non porta nibh quam nec orci. Nam tempus sapien vel facilisis consequat.
                    </Typography>
                    <BasicButton color="secondary" icon={<ArrowForwardIosIcon />} name="Visit his page" />
                    </Grid>
                </Grid>
                
                <Divider />
                { data ? 
                      data.slice(0).reverse().map(article => {
                            return <ArticleTypeAdmin 
                            key={article._id}
                            date={article.updatedAt.slice(9,10) + "/" + article.updatedAt.slice(6,7) + "/" + article.updatedAt.slice(0,4)}
                            titre={article.titre}
                            sousTitre={article.sousTitre}
                            paragraphe1={article.paragraphe1}
                            paragraphe2={article.paragraphe2}
                            paragraphe3={article.paragraphe3}
                            paragraphe4={article.paragraphe4}
                            paragraphe5={article.paragraphe5}
                            paragraphe6={article.paragraphe6}
                            citation={article.citation}
                            accroche={article.accroche}
                            signature={article.signature}/> })
                      : <Typography>Ops, on a un soucis! </Typography>}

                <Divider />

                <Grid container spacing={2} sx={{width:"100%", display:"flex", flexDirection:"row", my:3}}>
                    <Grid item xs={12} sm={8} md={8} lg={8}sx={{display:"flex", justifyContent:"space-between", flexDirection:"column", alignItems:"self-start"}}>
                        <Box>
                            <Titre titre="Promotions chez Lorem"  color="primary" />
                            <Typography sx={{my:2}} variant="subtitle1" gutterBottom component="div">
                            Suspendisse congue in orci ac mollis. Nullam tempor massa vitae magna consectetur auctor vitae vitae est. Nulla viverra ligula elit, eget commodo felis pulvinar non. Proin accumsan ligula nec finibus blandit. Phasellus rhoncus aliquam sodales.
                            </Typography>
                        </Box>
                        <BasicButton color="primary" icon={<CardGiftcardIcon />} name="J'en profite!" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} sx={{ overflow: 'hidden'}} >
                        <img style={{height:"auto", width:"100%"}} alt="Cadeau" src="https://picsum.photos/id/530/400/400" />
                    </Grid>
                    
                </Grid>
                <Divider />

                <Box sx={{my:3}}>
                    <Carrousel />
                </Box>
                <Divider />

                <Grid container spacing={2} sx={{width:"100%", display:"flex", flexDirection:"row", my:3}}>
                    <Grid item xs={12} sm={12} md={3} lg={2} >
                        <Avatar sx={{height:"125px", width:"125px"}} alt="Lorem" src="https://picsum.photos/id/345/200/200" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={10} >
                    <Titre titre="Lorem ipsum"  color="secondary" />
                    <Typography sx={{my:2}} variant="subtitle1" gutterBottom component="div">
                        Nulla vestibulum, velit et dapibus accumsan, leo libero pulvinar dolor, non porta nibh quam nec orci. Nam tempus sapien vel facilisis consequat.
                    </Typography>
                    <BasicButton color="secondary" icon={<ArrowForwardIosIcon />} name="Visit his page" />
                    </Grid>
                </Grid>
                
                
            </Container >
                
         </Box>;
}

export default Lactu;
