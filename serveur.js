const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

// Configurer la connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Remplacez par votre mot de passe MySQL
  database: 'boutique_bun'
});

// Connecter à la base de données
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL Database.');
});

// Route pour récupérer les jeux avec filtrage et tri
app.get('/products', (req, res) => {
  const genreFilter = req.query.genre || '';
  const sortOrder = req.query.sort || 'ASC';
  
  let sql = 'SELECT * FROM products';
  const params = [];
  
  if (genreFilter) {
    sql += ' WHERE genre = ?';
    params.push(genreFilter);
  }
  
  sql += ' ORDER BY price ' + (sortOrder === 'DESC' ? 'DESC' : 'ASC');

  db.query(sql, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
