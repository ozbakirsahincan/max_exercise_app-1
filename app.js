//Core Modules
const express = require('express');
const bodyParser = require('body-parser');

//Creating app
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));
//Adding view engine and set views folder
app.set("view engine","ejs");
app.set("views","views/pages/");


//Creating dummy data
const users = [];
//Adding routes
app.get('/',(req,res)=>{
    res.render('index',{pageTitle:'Add User ...'});
})
app.get('/users',(req,res)=>{
    res.render('users',{pageTitle:'Users',users:users});

})
app.post('/add-user',(req,res)=>{
    users.push({name : req.body.username})
    res.redirect('/users')
})




// Handle bad request 404
app.get("/",(req,res) => {
    res.status(404).render('404',{pageTitle:'404 Not Found :/'});
});

// Port create
app.listen(3001,()=> {
    console.log("Application started on\nhttp://localhost:3001 ");
})