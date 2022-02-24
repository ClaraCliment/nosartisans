import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import axios from "axios";

export default function Login( { setIsLogged, setIsAdmin, setUserFirstName } ) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailColor, setEmailColor] = useState("primary");
  const [passwordColor, setPasswordColor] = useState("primary");
  const [helperPass, setHelperPass] = useState("");
  const [helperEmail, setHelperEmail] = useState("");

  const history = useHistory();

  let actualUser = "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === "") {
      setPasswordError(true);
    }
    if (email === "") {
      setEmailError(true);
    }

    const data = {
      email: email,
      password: password,
    }

    axios.post(`${process.env.REACT_APP_API_URL}/api/users/signin`, data)
  .then((response) => {
    console.log(response.data.admin); 
    
    
  }
  )
  .catch(function (error) {
    console.log(error);
    setIsLogged(false);
    setHelperPass(
      "Le mot de passe ou l'adresse email est incorrect(e)."
    );

  });

  };

  // control format email
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
      setHelperEmail("")
      setEmailColor("success");
    }
  };

  //control format password
  const handlePasswordChange = (e) => {
    setPassword(e);
    if (
      e === "" ||
      !e.match(/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/)
    ) {
      setPasswordError(true);
      setHelperPass(
        "Le mot de passe doit contenir au moins 6 caractères dont au moins un chiffre, une majuscule, une minuscule et un caractère spécial. "
      );
    } else {
      setPasswordError(false);
      setHelperPass("")

      setPasswordColor("success");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        maxWidth:"600px",
        marginRight:"auto",
        marginLeft:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
      }}
      autoComplete="off"
    >
      <TextField 
        sx={{width:"100%", mb:1}} 
        label="email" 
        variant="outlined" 
        onChange={(e) => {
          handleEmailChange(e.target.value);
        }}
        required
        id="email"
        name="email"
        autoComplete="email"
        value={email}
        autoFocus
        error={emailError}
        color={emailColor}
        helperText={helperEmail}
        />

      <TextField 
        sx={{width:"100%", mb:1}} 
        label="mot de passe" 
        variant="outlined" 
        onChange={(e) => handlePasswordChange(e.target.value)}
        required
        name="password"
        value={password}
        type="password"
        id="password"
        color={passwordColor}
        autoComplete="current-password"
        error={passwordError}
        helperText={helperPass}
        />

      <Button 
        type="submit"
        sx={{width:"100%", mb:1}} 
        variant="contained" 
        size="large">Connexion</Button>

      <Link href="#" variant="body2">Mot de passe oublié? </Link>

    </Box>
  );
}
