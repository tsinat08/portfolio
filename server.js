const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('build'));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
});

//npm i express cors dotenv