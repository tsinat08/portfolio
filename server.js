const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
const forceHttps = (req, res, next) => {
    let userAgent = req.get('User-Agent') || '',
        forwardedProtocol = req.get('X-Forwarded-Proto') || '';
    if (!userAgent.includes('ELB-HealthChecker') && (!req.secure) && (forwardedProtocol !== 'https') && process.env.NODE_ENV !== "development") {
        //----------------------------
        // Redirect to https://
        //----------------------------
        return res.redirect(301, `https://${req.get('host')}` + req.url);
    }
    next();
}
app.use(forceHttps)

app.use(express.static('build'));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
});

//npm i express cors dotenv