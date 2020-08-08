const {Router} = require('express');
const router = Router();
const Course = require('../models/course');

const removeSpaces = str => {
    return str.replace(/\s/g, '');
}

router.get('/', (req, res) => {
    res.render('add', {
        title: 'add',
        isAdd: true
    });
});

router.post('/', async (req, res) => {
    const {title, price, name, image} = req.body;
    console.log(typeof price);
    const course = new Course(title, removeSpaces(price), name, image);
    await course.save();
    res.redirect('/courses');
});


module.exports = router;