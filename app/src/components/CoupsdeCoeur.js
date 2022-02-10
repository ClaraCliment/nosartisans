import React from 'react';
import Box from '@mui/material/Box';
import '.././index.css';
import Grid from '@mui/material/Grid';
import ArticleCoupdeCoeur from './ArticleCoupdeCoeur';
import Titre from './Titre';
import dayjs from 'dayjs';

const img_photos = "https://picsum.photos/id/355/345/345";
const img_magasin = "https://picsum.photos/id/1059/345/345";
const img_serigraphie = "https://picsum.photos/id/526/345/345";


function CoupsdeCoeur() {

    

  return <Box sx={{width:"100%", my:3}}>
            {/** On donne aux titres une autre typo, donc un autre thème */}
            <Titre titre="Nos coups de coeur de la semaine" color="secondary" />
            {/** Ici on place les coups de coeur (foires, ateliers, artisans de la semaine...) */}
            <Box sx={{width:"100%"}}>
            <Grid container spacing={2} sx={{width:"100%"}}>
                <Grid item xs={12} sm={12} md={12} lg={4} >
                    <ArticleCoupdeCoeur 
                        date={dayjs(new Date()).format('DD MM YYYY, hh:mm:ss A')}
                        id="coupdecoeur_1"
                        titre="Réparation d'appareils photo"
                        img={img_photos}
                        titre_article="Ne jetez plus vos vieux appareils photo qui ne marchent plus et redécouvrez les plaisirs de la photographie argentique!"
                        texte_article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in rhoncus purus. Aliquam vulputate a mi feugiat accumsan. Fusce fringilla tortor id orci rutrum vehicula. Vivamus tincidunt metus vitae tellus dignissim tristique eget non ligula. Pellentesque eu arcu et ex elementum porttitor. Donec posuere porta magna id aliquam."
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ArticleCoupdeCoeur 
                            date={dayjs(new Date()).format('DD MM YYYY, hh:mm:ss A')}
                            id="coupdecoeur_2"
                            titre="Nouveau magasin à Louvain!"
                            img={img_magasin}
                            titre_article="L'association d'artisans 'Y' ouvre son propre magasin à Louvain"
                            texte_article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in rhoncus purus. Aliquam vulputate a mi feugiat accumsan. Fusce fringilla tortor id orci rutrum vehicula. Vivamus tincidunt metus vitae tellus dignissim tristique eget non ligula. Pellentesque eu arcu et ex elementum porttitor. Donec posuere porta magna id aliquam."
                        />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} >
                    <ArticleCoupdeCoeur
                            date={dayjs(new Date()).format('DD MM YYYY, hh:mm:ss A')} 
                            id="coupdecoeur_3"
                            titre="Atelier serigraphie"
                            img={img_serigraphie}
                            titre_article="Samedi 3 avril, au magasin X à Wavre"
                            texte_article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in rhoncus purus. Aliquam vulputate a mi feugiat accumsan. Fusce fringilla tortor id orci rutrum vehicula. Vivamus tincidunt metus vitae tellus dignissim tristique eget non ligula. Pellentesque eu arcu et ex elementum porttitor. Donec posuere porta magna id aliquam."
                        />
                </Grid>
            </Grid>
            </Box>
         </Box>;
}

export default CoupsdeCoeur;
