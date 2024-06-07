const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');

app.use(cors({
    origin: '*'
})) 

app.listen(port, () => console.log(`listening on port  ${port}`));