const express = require('express');

// Create a Router
const router = express.Router();

//connect to JSON data and store the projects info
const data = require('../data.json');
const projects = data.projects;

// Render the Index Page
router.get('/', (req, res) => {
    res.render('index', { projects });
});

// Render the About Page
router.get('/about', (req, res) => {
  res.render('about');
});

//setting project route
router.get('/projects/:id', (req, res) => {
    //access to id parameters
    const id = req.params.id;
    const project = projects[id];

    res.render('project', { project });

});

module.exports = router;
