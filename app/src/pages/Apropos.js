import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Banner from '../components/Banner';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Titre from '../components/Titre';
import ImagesBloc from '../components/ImagesBloc';


export default function Apropos() {
  return <Box className="Home" sx={{width:"100%", mb:3}}>
            <Banner title="Pour des passionnés" text="- par des passionnés -" />
            <Container maxWidth="sm" sx={{minWidth:"80%", my:6}}>
                {/** Intro aux valeurs de la plateforme */}
                <Box sx={{my:3}}>
                    <Titre titre="Qui nous sommes"  color="secondary" />
                    <Typography sx={{my:2}} variant="subtitle1" gutterBottom component="div">
                        La plateforme Nos artisans a été créée afin d'offrir un lieu de rencontre pour les passionnés d'artisanat. Y sont répertoriés tous les artisans reconnus et enregistrés auprès du gouvernement belge. On met chaque semaine à l'honneur quelques coups de coeur, qu'il s'agisse d'un artisan, d'un projet concret, d'un atelier ou encore d'une foire artisanale.
                    </Typography>
                    <Divider />
                </Box>
                {/** Avantages */}
                <Box sx={{my:3}}>
                    <Titre titre="Devenir membre"  color="primary" />
                    <Typography sx={{my:2}} variant="subtitle1" gutterBottom component="div">
                        Devenez membre de la plateforme et profitez de tout plein d'avantages. Nos partenaires artisans vous feront profiter de promos, nouveautés, avant-premières et bien plus encore! Grâce à notre newsletter tenez-vous au courant de tout ce qui se fait en matière d'artisanat en Belgique. Vous aurez aussi accès à notre page "L'actu" afin d'être au courant des bons plans. Que vous souhaitiez participer à un atelier, une foire artisanale ou encore une exposition, vous trouverez toutes les activités dans cette page. Alors n'attendez plus et inscrivez-vous!  
                    </Typography>
                    
                </Box>
                {/** Image */}
                <ImagesBloc />
                {/** Artisans reconnus en Belgique */}
                <Box sx={{my:3}}>
                    <Titre titre="Les artisans en Belgique"  color="secondary" />
                    <Typography sx={{my:2}} variant="subtitle1" gutterBottom component="div">
                    La loi définit désormais l’artisan comme : "une personne physique ou morale active dans la production, la transformation, la réparation, la restauration d'objets et la prestation de services, dont les activités présentent des aspects essentiellement manuels, un caractère authentique et développant un certain savoir-faire axé sur la qualité, la tradition, la création ou l'innovation". Les artisans listés dans notre plateforme sont ceux reconnus par l'état belge, leurs données proviennent de la plateforme digitale du SPF Economie.
                    </Typography>
                    <Divider />
                </Box>
                <Box sx={{my:3}}>
                    <Titre titre="ATTENTION: ce site est fictif!"  color="primary" />
                    <Typography sx={{my:2}} variant="subtitle1" gutterBottom component="div">
                    Si les données fournies sur ce site concernant les artisans proviennent bien de SPF Economie, le reste du contenu est fictif car cette plateforme a été créée dans le cadre d'un stage de formation. Toute promesse de promo, réduction ou encore exclusivité est donc fictive et ne pourra être reprochée au créateur du site.
                    </Typography>

                </Box>
                
            </Container >
                
         </Box>;
}

