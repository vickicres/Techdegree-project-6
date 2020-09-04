const express = require('express');
const app = express();

//connect to JSON data and store the projects info
const data = require('./data.json');
const projects = data.projects;

//load the static files from public folder
app.use('/static', express.static('public'));

//set view engine to pug
app.set('view engine', 'pug');

//Render home page
app.get('/', (req, res) => {
    res.render('index', { projects });
});

//Render about page
app.get('/about', (req, res) => {
    res.render('about');
});


//setting project route
app.get('/projects/:id', (req, res) => {
    //access to id parameters
    const id = req.params.id;
    const project = projects[id];

    if(!id || id > project.length) {
        return res.redirect('/');
    }
    res.render('project', { project });

});

//create error page
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

//Adding error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');

});

app.listen(3000, () => {
    console.log('This application is running on localhost:3000!');
 });