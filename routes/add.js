const {Router} = require('express');
const router = Router();
const Course = require('../models/course');

router.get('/', (req, res) => {
    res.render('add', {
        title: 'add',
        isAdd: true
    });
});

router.post('/', async (req, res) => {
    const {title, price, name, image} = req.body;
    const course = new Course(title, price, name, image);
    await course.save();
    res.redirect('/courses');
});


module.exports = router;