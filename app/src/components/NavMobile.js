import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import InsideNavMobile from './InsideNavMobile';
import IconButton from '@mui/material/IconButton';
import Logo from "../svg/Logo";
import Link from '@mui/material/Link';


export default function NavMobile( {isAdmin, isLogged, setIsLogged} ) {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
            <Box sx={{ p:"20px", justifyContent:"left" }}>
              <Link href="/" >
              <Logo />
              </Link>
            
            </Box>

            <Box sx={{ p:"20px", justifyContent:"right" }}>
              <IconButton
                    onClick={handleClickOpen}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >

                <DialogContent>
                  <InsideNavMobile isLogged={isLogged} isAdmin={isAdmin} setIsLogged={setIsLogged} />
                </DialogContent>
                
              </Dialog>
            </Box>
  </Box>
  );
}
