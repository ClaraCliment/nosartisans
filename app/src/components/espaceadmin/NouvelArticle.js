import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function NouvelArticle() {

  // on controle les inputs
  const [titre, setTitre] = useState("");  
  const [sousTitre, setSousTitre] = useState("");
  const [paragraphe1, setParagraphe1] = useState("");
  const [paragraphe2, setParagraph2] = useState("");
  const [paragraphe3, setParagraphe3] = useState("");
  const [paragraphe4, setParagraphe4] = useState("");
  const [paragraphe5, setParagraphe5] = useState("");
  const [paragraphe6, setParagraphe6] = useState("");
  const [citation, setCitation] = useState("");
  const [accroche, setAccroche] = useState("");
  const [signature, setSignature] = useState("");

// on affiche des erreurs s'il y en a
const [titreError, setTitreError] = useState(false);  
const [sousTitreError, setSousTitreError] = useState(false);
const [paragraphe1Error, setParagraphe1Error] = useState(false);
const [signatureError, setSignatureError] = useState(false);

// Couleur du field et aide textuelle
const [titreColor, setTitreColor] = useState("primary");  
const [sousTitreColor, setSousTitreColor] = useState("primary");
const [paragraphe1Color, setParagraphe1Color] = useState("primary");
const [signatureColor, setSignatureColor] = useState("primary");

const [titreHelper, setTitreHelper] = useState("");  
const [sousTitreHelper, setSousTitreHelper] = useState("");
const [paragraphe1Helper, setParagraphe1Helper] = useState("");
const [signatureHelper, setSignatureHelper] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (titre === "") {
      setTitreError(true);
    }
    if (sousTitre === "") {
      setSousTitreError(true);
    }
    if (paragraphe1 === "") {
        setParagraphe1Error(true);
      }
    if (signature === "") {
        setSignatureError(true);
    }

    const data = {
      titre: titre,
      sousTitre: sousTitre,
      paragraphe1: paragraphe1,
      paragraphe2: paragraphe2,
      paragraphe3: paragraphe3,
      paragraphe4: paragraphe4,
      paragraphe5: paragraphe5,
      paragraphe6: paragraphe6,
      citation: citation,
      accroche: accroche,
      signature: signature
    }

    axios.post(`${process.env.REACT_APP_API_URL}/api/articles`,data)
  .then(function (response) {
    window.location.reload();
  })
  .catch(function (error) {
    setSignatureHelper(
      "L'article n'a pas pu être ajouté."
    );
  });


  };

  // control format du titre
  const handleTitre = (e) => {
    setTitre(e);
    if (e === "") {
      setTitreError(true);
      setTitreHelper("Ce champ est obligatoire.");
    } else {
      setTitreError(false);
      setTitreHelper("")
      setTitreColor("success");
    }
  };

  // control format du sous-titre
  const handleSousTitre = (e) => {
    setSousTitre(e);
    if (e === "") {
      setSousTitreError(true);
      setSousTitreHelper("Ce champ est obligatoire.");
    } else {
      setSousTitreError(false);
      setSousTitreHelper("")
      setSousTitreColor("success");
    }
  };

  // control du 1er paragraphe
  const handleParagraphe1 = (e) => {
    setParagraphe1(e);
    if (e === "") {
      setParagraphe1Error(true);
      setParagraphe1Helper("L'article doit contenir au moins un paragraphe.");
    } else {
      setParagraphe1Error(false);
      setParagraphe1Helper("")
      setParagraphe1Color("success");
    }
  };

  // control signature
  const handleSignature = (e) => {
    setSignature(e);
    if (e === "") {
      setSignatureError(true);
      setSignatureHelper("L'auteur de l'article doit être cité.");
    } else {
      setSignatureError(false);
      setSignatureHelper("")
      setSignatureColor("success");
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
        label="titre" 
        variant="outlined" 
        onChange={(e) => {
            handleTitre(e.target.value);
        }}
        required
        id="titre"
        name="titre"
        autoComplete="titre"
        value={titre}
        autoFocus
        error={titreError}
        color={titreColor}
        helperText={titreHelper}
        />

        <TextField 
        sx={{width:"100%", mb:1}} 
        label="sous-titre" 
        variant="outlined" 
        onChange={(e) => {
            handleSousTitre(e.target.value);
        }}
        required
        id="sousTitre"
        name="sousTitre"
        autoComplete="sous titre"
        value={sousTitre}
        error={sousTitreError}
        color={sousTitreColor}
        helperText={sousTitreHelper}
        />

        <TextField 
        sx={{width:"100%", mb:1}} 
        label="paragraphe" 
        variant="outlined" 
        onChange={(e) => {
            handleParagraphe1(e.target.value);
        }}
        required
        id="paragraphe1"
        name="paragraphe1"
        autoComplete="paragraphe"
        value={paragraphe1}
        error={paragraphe1Error}
        color={paragraphe1Color}
        helperText={paragraphe1Helper}
        multiline
        />

        <TextField 
        sx={{width:"100%", mb:1}} 
        label="Optionnel: paragraphe supplémentaire" 
        variant="outlined" 
        id="paragraphe2"
        name="paragraphe2"
        autoComplete="Optionnel: paragraphe supplémentaire"
        value={paragraphe2}
        multiline
        onChange={(e) => {
            setParagraph2(e.target.value);
        }}
        />
        <TextField 
        sx={{width:"100%", mb:1}} 
        label="Optionnel: paragraphe supplémentaire" 
        variant="outlined"
        id="paragraphe3"
        name="paragraphe3"
        autoComplete="Optionnel: paragraphe supplémentaire"
        value={paragraphe3}
        multiline
        onChange={(e) => {
            setParagraphe3(e.target.value);
        }}
        />
        <TextField 
        sx={{width:"100%", mb:1}} 
        label="Optionnel: paragraphe supplémentaire" 
        variant="outlined" 
        id="paragraphe4"
        name="paragraphe4"
        autoComplete="Optionnel: paragraphe supplémentaire"
        value={paragraphe4}
        multiline
        onChange={(e) => {
            setParagraphe4(e.target.value);
        }}
        />
        <TextField 
        sx={{width:"100%", mb:1}} 
        label="Optionnel: paragraphe supplémentaire" 
        variant="outlined" 
        id="paragraphe5"
        name="paragraphe5"
        autoComplete="Optionnel: paragraphe supplémentaire"
        value={paragraphe5}
        multiline
        onChange={(e) => {
            setParagraphe5(e.target.value);
        }}
        />
        <TextField 
        sx={{width:"100%", mb:1}} 
        label="Optionnel: paragraphe supplémentaire" 
        variant="outlined" 
        id="paragraphe6"
        name="paragraphe6"
        autoComplete="Optionnel: paragraphe supplémentaire"
        value={paragraphe6}
        multiline
        onChange={(e) => {
            setParagraphe6(e.target.value);
        }}
        />
        <TextField 
        sx={{width:"100%", mb:1}} 
        label="Optionnel: citation" 
        variant="outlined" 
        id="citation"
        name="citation"
        autoComplete="Optionnel: citation"
        value={citation}
        multiline
        onChange={(e) => {
            setCitation(e.target.value);
        }}
        />
        <TextField 
        sx={{width:"100%", mb:1}} 
        label="Optionnel: accroche" 
        variant="outlined" 
        id="accroche"
        name="accroche"
        autoComplete="Optionnel: accroche"
        value={accroche}
        multiline
        onChange={(e) => {
            setAccroche(e.target.value);
        }}
        />
        <TextField 
        sx={{width:"100%", mb:1}} 
        label="signature" 
        variant="outlined" 
        id="signature"
        name="signature"
        autoComplete="signature de l'auteur"
        value={signature}
        onChange={(e) => {
            handleSignature(e.target.value);
        }}
        error={signatureError}
        color={signatureColor}
        helperText={signatureHelper}
        required
        />


      <Button 
        type="submit"
        sx={{width:"100%", mb:1}} 
        variant="contained" 
        size="large">Publier</Button>
    </Box>
  );
}
