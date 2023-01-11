const express = require('express');
const path = require('path');
const cors = require('cors');

const cmsRouter =  require('./routes/cms');
const apiRouter =  require('./routes/api');
const app =  express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cms', cmsRouter);
app.use('/api', apiRouter);

app.use('/cms/public/script.js', (req,res) => res.sendFile(path.join(__dirname, 'public/script.js')))
app.use('*', (req,res) => res.sendFile(path.join(__dirname, 'public/404.html')))

app.listen(5000, () => console.log('Server running on PORT 5000'));