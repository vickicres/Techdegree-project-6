const express = require('express');
const app = express();

app.use('/static', express.static('public'));

//set view engine to pug
app.set('view engine', 'pug');

const projectRoutes = require('./routes/projects');

app.use(projectRoutes);

//Render home page
app.get('/', (req, res) => {
    res.render('index', { projects });
});

//Render about page
app.get('/about', (req, res) => {
    res.render('about');
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