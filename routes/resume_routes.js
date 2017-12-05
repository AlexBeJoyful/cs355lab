var express = require('express');
var router = express.Router();
var inserts = require('../model/inserts_universal');
var resume_dal = require('../model/resume_dal');

router.get('/all', (req, res) => {
    resume_dal.getAll()
    .then(resume => res.render('resumeAll', {resume}))
.catch(err => res.send(err));
});

router.post('/insert', (req, res) => {
    console.log(req.body.school);
inserts.insert('school', req.body.school)
    .then(setTimeout(() => {res.redirect('/school/all')}, 200))
.catch(err => res.send(err));
});

router.get('/delete/:name', (req, res) => {
    let name = req.params.name;
school_dal.delete(name)
    .then(setTimeout(() => {res.redirect('/school/all')}, 200))
.catch(err => res.send(err));
});

router.post('/edit', (req, res) => {
    school_dal.edit(req.body.school)
    .then(setTimeout(() => {res.redirect('/school/all')}, 200))
.catch(err => res.send(err));
});

module.exports = router;

