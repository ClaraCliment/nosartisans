import React from 'react';
import './NaveLarge.css';
import Box from '@mui/material/Box';
import Logo from "../svg/Logo";
import Link from '@mui/material/Link';

function NavLarge( {isLogged, isAdmin, setIsLogged} ) {

  return <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection:"column", justifyContent:"center", borderBottom: 1, width:"auto"}}>
                <Box sx={{mt:4, mb:2}} >
                    <Link href="/">
                    <Logo/>
                    </Link>
                </Box>
                <Box className='nav'>
                    <ul className='nav_list' >
                        <li className='nav_item'><a className="lien" href="/">Principal</a></li>
                        <li className='nav_item'><a className="lien" href="/apropos">A propos</a></li>
                        <li className='nav_item'><a className="lien" href="/lactu">L'actu</a></li>
                        {isAdmin===true ? <li className='nav_item'><a className="lien" href="/admin">Admin</a></li> : <li className='nav_item'><a className="lien" href="/profil">Profil</a></li>}
                        {isLogged===false ? <li className='nav_item'><a className="lien" href="/connexion">Se connecter</a></li> : <li className='nav_item'><a className="lien" href="/" onClick={() => { setIsLogged(false)}}>Se déconnecter</a></li>}
                        
                    </ul>
                </Box>
         </Box>
}

export default NavLarge;
