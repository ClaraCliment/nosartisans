import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import axios from "axios";
import UserState from "../context/UserState";
import { useHistory } from "react-router-dom";

const img_user = "https://picsum.photos/id/1025/150/150";


export default function ProfilUser() {

  const [firstnameError, setFirstNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordColor, setPasswordColor] = useState("primary");
  const [emailColor, setEmailColor] = useState("primary");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("primary");
  const [helperPass, setHelperPass] = useState("");
  const [helperEmail, setHelperEmail] = useState("");
  const [helperConfirmPass, setHelperConfirmPass] = useState("");
  const [updateFirstName, setUpdateFirstName] = useState(true);
  const [updateLastName, setUpdateLastName] = useState(true);
  const [updateEmail, setUpdateEmail] = useState(true);
  const [updatePassword, setUpdatePassword] = useState(true);

  const { setIsLogged } = useContext(UserState);
  const history = useHistory();
    
    const handleClick = () => {
      setUpdateFirstName(!updateFirstName);
      };

    const handleChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError(false);
    console.log(firstName);
    };

    const handleClick2 = () => {
      setUpdateLastName(!updateLastName);
      };

    const handleChange2 = (e) => {
    setLastName(e.target.value);
    setLastNameError(false);
    console.log(lastname);
    };

    const handleClick3 = () => {
      setUpdateEmail(!updateEmail);
      };

    const handleClick4 = () => {
      setUpdatePassword(!updatePassword);
      };

    // Partie contrôle des formats
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
        !e.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      ) {
        setPasswordError(true);
        setHelperPass(
          "Le mot de passe doit contenir au moins 8 caractères dont au moins un chiffre, une majuscule et une minuscule."
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
          "Le mot de passe doit contenir au moins 8 caractères dont au moins un chiffre, une majuscule et une minuscule."
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

    // Logout
    const handleLogout = async (event) => {
      event.preventDefault();
      axios.get(`${process.env.REACT_APP_API_URL}/api/users/logout`)
      .then(function(response){
        console.log(response);
        setIsLogged(false);
        history.push("/");
    })
      .catch(function (error) {
        console.log(error);
      });
      
    }


  return (
    <Box
      component="form"
      //onSubmit={handleSubmit}
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

      {/** User avatar */}
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", width:"100%", my:3}}>
        <Avatar
          alt="Image random utilisateur"
          src={img_user}
          sx={{ width: 150, height: 150 }}
        />
      </Box>

      <Divider />


      {/** Update first name */}
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%", mt:4}}>
        <TextField 
          disabled={updateFirstName}
          onChange={handleChange}
          sx={{mr:1, width:"85%"}} 
          variant="outlined" 
          required
          value={firstName}
          error={firstnameError}

          /> 
          <Stack direction="column" alignItems="start-end">
              <IconButton aria-label="delete" size="large" sx={{bgcolor:"fourth.main"}} onClick={handleClick}>
                  <BorderColorIcon />
              </IconButton>
          </Stack> 
      </Box>
      {/** Update last name */}
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%", mt:2}}>
        <TextField 
          disabled={updateLastName}
          onChange={handleChange2}
          sx={{mr:1, width:"85%"}} 
          variant="outlined" 
          required
          value={lastname}
          error={lastnameError}
          /> 
          <Stack direction="column" alignItems="start-end">
              <IconButton aria-label="delete" size="large" sx={{bgcolor:"fourth.main"}} onClick={handleClick2}>
                  <BorderColorIcon />
              </IconButton>
          </Stack> 
      </Box>
      {/** Update email */}
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%", mt:2}}>
        <TextField 
          disabled={updateEmail}
          onChange={(e) => handleEmailChange(e.target.value)}
          sx={{mr:1, width:"85%"}} 
          variant="outlined" 
          value={email}
          error={emailError}
          name="email"
          color={emailColor}
          autoComplete="email"
          helperText={helperEmail}
          required
          /> 
          <Stack direction="column" alignItems="start-end">
              <IconButton aria-label="delete" size="large" sx={{bgcolor:"fourth.main"}} onClick={handleClick3}>
                  <BorderColorIcon />
              </IconButton>
          </Stack> 
      </Box>
      {/** Update password */}
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%", mt:2}}>
        <TextField 
          disabled={updatePassword}
          sx={{mr:1, width:"85%"}} 
          variant="outlined" 
          required
          value={password}
          label="changer mot de passe"
          onChange={(e) => handlePasswordChange(e.target.value)}
          name="password"
          type="Password"
          id="passwordNewConfirm"
          error={passwordError}
          color={passwordColor}
          autoComplete="new-password"
          helperText={helperPass}
          /> 
          <Stack direction="column" alignItems="start-end">
              <IconButton aria-label="delete" size="large" sx={{bgcolor:"fourth.main"}} onClick={handleClick4}>
                  <BorderColorIcon />
              </IconButton>
          </Stack> 
      </Box>
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%", my:2}}>
      <TextField 
          disabled={updatePassword}
          //onChange={handleChange4}
          sx={{mr:1, width:"85%"}} 
          variant="outlined" 
          required
          value={confirmPassword} 
          label="confirmer mot de passe" 
          onChange={(e) =>
            handlePasswordConfirmChange(e.target.value, password)
          }
          name="password_confirm"
          type="password"
          id="password_confirm"
          error={confirmPasswordError}
          autoComplete="new-password"
          color={confirmPasswordColor}
          helperText={helperConfirmPass}

          /> 
      </Box>

      <Button 
        type="submit"
        sx={{width:"100%", mb:1}} 
        variant="contained" 
        size="large">Mettre à jour</Button>

      <Button 
        sx={{width:"100%", mb:1, bgcolor:"secondary.main"}} 
        variant="contained" 
        size="large">Supprimer compte</Button>

        <Button 
        sx={{width:"100%", mb:1, bgcolor:"secondary.main"}} 
        variant="contained" 
        size="large"
        onClick={handleLogout}>Se déconnecter</Button>

    </Box>
  );
}
