const express = require('express');
const router = express.Router();

//connect to JSON data and store the projects info
const { data } = require('./data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const project = projects[id];

    if(!id || id > projects.length) {
        return res.redirect('/');
    }
    res.render('project', { project });

});

module.exports = router;