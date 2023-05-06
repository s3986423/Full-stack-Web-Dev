const express = require('express')
const app = express()
const port = 3300

app.set ('view engine','ejs')
app.use(express.static("public"));

app.get ('/', (req,res) => {
    res.render('index')
});

app.get ('/RegisterVendor', (req,res) => {
    res.render('RegisterVendor')
});

app.get ('/LogIn', (req,res) => {
    res.render('LogIn')
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});