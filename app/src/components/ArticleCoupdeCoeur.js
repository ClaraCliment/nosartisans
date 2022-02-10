import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ArticleCoupdeCoeur(props) {
  
  const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      
  // L'user like l'article?
  const [checked, setChecked] = useState(true);

  const handleLike = () => {
    setChecked(!checked);
    console.log(checked)
    
  };

  
  return (
    <Card sx={{ width:"100%" }} id={props.id}>
      <CardHeader
        sx= {{ minHeight:"60px", display:"flex", alignItems:"strech"}}
        avatar={
          <Avatar sx={{ bgcolor: "#304839" }} aria-label="recipe">
            {/** Ici il faudra placer l'icone du logo Nos Artisans */}
            A
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.titre}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt="Article coup de coeur"
      />
      <CardActions disableSpacing>
        <Checkbox 
          checked={!checked}
          onChange={handleLike}
          icon={<FavoriteBorder />}  
          checkedIcon={<Favorite sx={{color:"#db0433"}} 
          />} />
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.titre_article}</Typography>
          <Typography paragraph>
          {props.texte_article}
          </Typography>
          
          <Typography>
            {props.auteur}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
