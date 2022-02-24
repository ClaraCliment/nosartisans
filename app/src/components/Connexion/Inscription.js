import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from "axios";


export default function Inscription() {

  const [firstnameError, setFirstNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordColor, setPasswordColor] = useState("primary");
  const [emailColor, setEmailColor] = useState("primary");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("primary");
  const [helperPass, setHelperPass] = useState("");
  const [helperEmail, setHelperEmail] = useState("");
  const [helperConfirmPass, setHelperConfirmPass] = useState("");

  // L'user veut s'inscrire à la newsletter?
  const [checked, setChecked] = React.useState(true);

  const handleNewsletter = () => {
    setChecked(!checked);    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if(email === '') {
      setEmailError(true)
      setHelperEmail('Ce champ est vide.')
    }

    if(confirmPassword === '') {
      setConfirmPasswordError(true)
      setHelperEmail('Ce champ est vide.')
    }

    if(!(confirmPassword === password)) {
      setPasswordError(true);
      setConfirmPasswordError(true)
      setHelperConfirmPass('Les mots de passe ne sont pas identiques.')
    }

    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      admin: false,
    }
  axios.post(`${process.env.REACT_APP_API_URL}/api/users/signup`,data)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
    setHelperEmail("Cet email est déjà employé. Veuillez vous connecter au lieu de vous inscrire.");
  });
  }


  const handleEmailChange = (e) => {
    setEmail(e);
    if (
      e === "" ||
      !e.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailError(true);
      setHelperEmail("Ecrivez un format d'adresse email correct. [*@.*]");

    } else {
      setEmailError(false);
      setHelperEmail("");
      setEmailColor("success");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
    if (
      e === "" ||
      !e.match(/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/)
    ) {
      setPasswordError(true);
      setHelperPass(
        "Le mot de passe doit contenir au moins 6 caractères dont au moins un chiffre, une majuscule, une minuscule et un caractère spécial."
      );
    } else {
      setPasswordError(false);
      setHelperPass("")

      setPasswordColor("success");
    }
  };

  const handlePasswordConfirmChange = (e, password) => {
    setConfirmPassword(e);
    if (e === "") {
      setConfirmPasswordError(true);
      setHelperPass(
        "Le mot de passe doit contenir au moins 6 caractères dont au moins un chiffre, une majuscule, une minuscule et un caractère spécial."
      );
    } else if (e !== password) {
      setConfirmPasswordError(true);
      setHelperConfirmPass("Les mots de passe doivent être identiques.");
    } else {
      setConfirmPasswordError(false);
      setHelperConfirmPass("");
      setHelperPass("");
      setConfirmPasswordColor("success");
    }
  };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth:"600px",
        marginRight:"auto",
        marginLeft:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        sx={{width:"100%", mb:1}} 
        label="prénom" 
        variant="outlined" 
        onChange={(e) => {
          setFirstName(e.target.value);
          setFirstNameError(false);
        }}
        autoComplete="given-name"
        name="firstName"
        value={firstname}
        required
        id="firstNameNew"
        autoFocus
        error={firstnameError}/>
      
      <TextField 
        sx={{width:"100%", mb:1}}  
        label="nom" 
        variant="outlined" 
        onChange={(e) => {
          setLastName(e.target.value);
          setLastNameError(false);
        }}
        required
        id="lastNameNew"
        name="lastName"
        value={lastname}
        autoComplete="family-name"
        error={lastnameError}/>
      
      <TextField 
        sx={{width:"100%", mb:1}} 
        label="email" 
        variant="outlined"
        onChange={(e) => handleEmailChange(e.target.value)}
        required
        value={email}
        id="emailNew"
        error={emailError}
        name="email"
        color={emailColor}
        autoComplete="email"
        helperText={helperEmail}/>
      
      <TextField 
        sx={{width:"100%", mb:1}} 
        label="mot de passe" 
        variant="outlined" 
        onChange={(e) => handlePasswordChange(e.target.value)}
        required
        name="password"
        type="Password"
        value={password}
        id="passwordNewConfirm"
        error={passwordError}
        color={passwordColor}
        autoComplete="new-password"
        helperText={helperPass}/>
      
      <TextField 
        sx={{width:"100%", mb:1}}  
        label="confirmer mot de passe" 
        variant="outlined" 
        required
        onChange={(e) =>
          handlePasswordConfirmChange(e.target.value, password)
        }
        name="password_confirm"
        type="password"
        value={confirmPassword}
        id="password_confirm"
        error={confirmPasswordError}
        autoComplete="new-password"
        color={confirmPasswordColor}
        helperText={helperConfirmPass}/>
      
      <Button 
        type="submit"
        sx={{width:"100%", mb:1}} 
        variant="contained" 
        size="large">Créer profil</Button>

      <FormControlLabel 
        sx={{width:"100%", mb:1}}
        value={checked}
        control={<Checkbox 
            //defaultChecked 
            checked={!checked}
            onChange={handleNewsletter}
            inputProps={{ 'aria-label': 'controlled' }}/>} 
        label="Je m'inscris à la Newsletter" />
      
      <Typography>La newsletter permet de se tenir au courant des nouveautés, promos et tous les évènements du moment, profitez-en!</Typography>

    </Box>
  );
}
