const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');

app.use(cors({
    origin: '*'
})) 


const routeAccueil = require("./route/route.js");

app.use(routeAccueil);
app.listen(port, () => console.log(`listening on port  ${port}`));