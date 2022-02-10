require('dotenv').config();
const connexion = (process.env.ATLAS_CONNEXION);
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const cors = require('cors');

// On importe le router pour les  users
const userRoutes = require('./routes/user');
// On importe le router pour les  artisans
const artisanRoutes = require('./routes/artisan');
// On importe le router pour les  articles
const articleRoutes = require('./routes/article');

// Logique pour se connecter à MongoDB
mongoose.connect( process.env.MONGODB_URI || connexion,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

 
const app = express();

// Tout le monde a accès à l'API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.set('trust proxy', 1)
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

// Body parser
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());


app.use('/api/artisans', artisanRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);


//ERROR MIDDLEWARE
app.use(errorHandler);




module.exports = app;