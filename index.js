const express = require('express')
const app = express()
const port = 3300

app.set ('view engine','ejs')
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get ('/', (req,res) => {
    res.render('index')
});

app.get ('/RegisterVendor', (req,res) => {
    res.render('RegisterVendor')
});

app.get ('/LogIn', (req,res) => {
    res.render('LogIn')
});

app.get ('/About', (req,res) => {
    res.render('About')
});

app.get ('/Helps', (req,res) => {
    res.render('Helps')
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});