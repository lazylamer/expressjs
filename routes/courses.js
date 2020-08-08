const {Router} = require('express');
const router = Router();
const Course = require('../models/course')


router.get('/',  async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    const courses = await Course.getAll();
    // console.log(courses);
    res.render('courses', {
        title: 'courses',
        courses,
        isCourses: true
    });
});

router.get('/:id', (req, res) => {
    res.render('course');
});

module.exports = router;