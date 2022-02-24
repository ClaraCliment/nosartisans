import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';

export default function InsideNavMobile( {isLogged, isAdmin, setIsLogged} ) {

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="menu">
        <List>
          <ListItem disablePadding >
            <ListItemButton component="a" href="/">
            
              <ListItemText primary="Principal" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton component="a" href="/apropos">
              <ListItemText primary="A propos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/lactu">
              <ListItemText primary="L'actu" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        
        {isAdmin===true ?
          <ListItem disablePadding>
          <ListItemButton component="a" href="/admin">
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItemButton>
        </ListItem>
        : 
        <ListItem disablePadding>
        <ListItemButton component="a" href="/profil">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
          <ListItemText primary="Profil" />
        </ListItemButton>
      </ListItem>
      }
      {isLogged === false?
        <ListItem disablePadding>
        <ListItemButton component="a" href="/connexion">
            <ListItemIcon>
              <LockOpenIcon />
            </ListItemIcon>
          <ListItemText primary="Se connecter" />
        </ListItemButton>
      </ListItem>
      :
      <ListItem disablePadding>
      <ListItemButton component="a" href="/" onClick={() => { setIsLogged(false)}}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
        <ListItemText primary="Se déconnecter" />
      </ListItemButton>
    </ListItem>
      }
          
      </nav>
    </Box>
  );
}
