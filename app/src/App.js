import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Box from '@mui/material/Box';
import Home from './pages/Home';
import Header from "./components/Header";
import Apropos from "./pages/Apropos";
import NotFound from "./pages/NotFound";
import Footer from './components/Footer';
import ArtisanDetails from "./pages/ArtisanDetails";
import Connexion from "./pages/Connexion";
import Lactu from "./pages/Lactu";
import Admin from "./pages/Admin";
import Profil from "./pages/Profil";
import {useState} from 'react';

export default function App() {

 const [isAdmin, setIsAdmin] = useState(false);
 const [isLogged, setIsLogged] = useState(false);
 const [userFirstName, setUserFirstName] = useState("");

  return (
    <Router>
      <Box className="App" style={{backgroundColor: "#fcfcfc"}} >
          <Header isAdmin={isAdmin} isLogged={isLogged }/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/artisan:id" component={ArtisanDetails} />
          <Route exact path="/apropos" component={Apropos} />
          <Route exact path="/connexion" component={Connexion} setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} setUserFirstName={setUserFirstName} />
          <Route exact path="/lactu" component={Lactu} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/profil" component={Profil} />
          <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
      </Box>
    </Router>
    
  );
}
