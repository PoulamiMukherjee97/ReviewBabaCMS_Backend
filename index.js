const express = require('express');
const path = require('path');

const cmsRouter =  require('./routes/cms');
const apiRouter =  require('./routes/api');
const app =  express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cms', cmsRouter);
app.use('/api', apiRouter);

app.use('*', (req,res) => res.sendFile(path.join(__dirname, 'public/404.html')))

app.listen(5000, () => console.log('Server running on PORT 5000'));