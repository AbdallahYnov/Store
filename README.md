# store

# API
Make sure to have Wampserver installed and that you can connect to phpmyadmin
Check the data folder located in API and copy and paste the code into your database

Change the following code to match your database init in API/config:

// Configurer la connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'boutique_bun'
});

Upon installation make sure you have node and npm
Run "npm install X" and replace "X" by the following dependencies:
- mysql2
- express

Reminder: ALL OF THE ABOVE NEED TO BE DONE IN THE API DIRECTORY (cd API)

# frontend
Make sure to download express again here
Run "npm install X" and replace "X" by the following dependencies:
- express
- cookie-parser