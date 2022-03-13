import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;


  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AlerteVisiteur() {
  const [open, setOpen] = React.useState(true);

    // le popup ne doit apparaitre q'une fois
  const [visible, setVisible] = React.useState(false);
  useEffect(()=>{
    let pop_status = localStorage.getItem('pop_status');
    if(!pop_status){
      setVisible(true);
      localStorage.setItem('pop_status',1);
    }
  },[])
  if(!visible) return null;



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
          Bienvenu sur notre plateforme nos Artisans
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Ce site est un exercice réalisé dans le cadre d'un formation. Il ne s'agit donc pas d'une vraie plateforme bien que les données des artisans soient bien réelles (fournies pas SPF Economie).
          </Typography>
          
          <Typography gutterBottom>
            Par conséquent, toutes les activités citées ici sont fictives et les promotions inexistantes, vous inscrire à cette plateforme n'apporte donc aucun avantage et son créateur ne pourra en aucun cas être tenu responsable du manque d'avantages à s'inscrire à cette plateforme.
          </Typography>
  
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Je comprends
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
