const express = require('express');
const app = express();
const people = require('./people.json');

//Set PUG as view engine
app.set('view engine', 'pug');

//Server static files from the public folder
app.use(express.static(__dirname + '/public'));

//Set Home route
app.get('/', (req, res) =>{

    res.render('index', {
        title: 'Welcome to FamFolio(under construction)',
        people: people.profiles
    });
});

app.get('/profile', (req, res)=> {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
        title: `About ${person.firstname} ${person.lastname}`,
        person,
    });
});

    app.get('/resume', (req, res)=> {
        //const person = people.profiles.find(p => p.id === req.query.id);
        res.render('resume', {
            title: `Resume`,
//            person,
         });

    });
    app.get('/critique', (req, res)=> {
        //const person = people.profiles.find(p => p.id === req.query.id);
        res.render('critique', {
            title: `Critique`,
//            person,
         });

    });
const server = app.listen(7000, () =>{
    console.log(`Express running -> PORT ${server.address().port}`);
});