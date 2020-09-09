const express = require('express');
const app = express();

//load the static files from public folder
app.use('/static', express.static('public'));

//set view engine to pug
app.set('view engine', 'pug');

//Require the routes folder
const routes = require('./routes');
app.use(routes);


//create error page
app.use((req, res, next) => {
    console.log('Going to the wrong way!')
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
    console.log('This application is running on localhost:3000!')
 });