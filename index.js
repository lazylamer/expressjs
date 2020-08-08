//constants and modules
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');
const path = require('path');

//functions
const configureHbs = (app, hbs) => {
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
    app.set('views', 'views');
}


//requests
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
//config handlebars (engine for views(templates))

configureHbs(app, hbs);

//using static files
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(express.static('/public'));
//routers
app.use(express.urlencoded({extended: false}))
app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);


app.listen(PORT, () => {
   console.log(`server is running at port:${PORT}...`)
});