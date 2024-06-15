const express = require('express');
const path = require('path'); // Utilisé pour gérer les chemins
const app = express();
const port = 4000;

const cors = require('cors');
const mainRoute = require('./routes/mainRoute'); // Importer votre routeur

// Middleware CORS
app.use(cors({
    origin: '*'
}));

// Configuration du moteur de vues EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Configuration du répertoire des vues

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public'))); // Chemin vers les fichiers statiques

// Middleware pour analyser les données des formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Pour les données JSON

// Utilisation des routes
app.use('/', mainRoute); // Routeur pour les routes principales

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
