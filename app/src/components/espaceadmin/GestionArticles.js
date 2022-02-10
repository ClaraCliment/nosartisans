import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
//import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

// fetch artisans 
import useFetch from '../../Utils/useFetch';
import Loading from '../../Utils/Loading';
import ErrorMessage from '../../Utils/ErrorMessage';
// import ArticleCoupdeCoeur from '../ArticleCoupdeCoeur';

function GestionArticles() {

    // fetch tous les articles 
    const {data, loading, error } = useFetch(
        `${process.env.REACT_APP_API_URL}/api/articles`
      );
    
      if (loading) return <Loading />;
    
      if (error) return <ErrorMessage />;

      if(data) console.log(data)


  return <Box sx={{maxWidth:"600px", mx:"auto"}}>

        
            {data? data.map((article) => {
                return <Box key={article._id} sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%", mt:2}}>
                            <Typography sx={{bgcolor:"fourth.main", width:"80%", p:1, overflow:"hidden"}}>{article.titre}</Typography> 
                            <Stack direction="column" alignItems="start-end" >
                                <IconButton aria-label="delete" size="large" sx={{bgcolor:"fourth.main"}} onClick={(e) => {
                                    e.preventDefault();
                                    axios.delete(`${process.env.REACT_APP_API_URL}/api/articles/${article._id}`);
                                    window.location.reload();
                                }} >
                                    <DeleteIcon />
                                </IconButton>
                            </Stack> 
                        </Box>
            }): <Typography>Ops, on a un soucis! </Typography>}
            

  </Box>;
}

export default GestionArticles;
