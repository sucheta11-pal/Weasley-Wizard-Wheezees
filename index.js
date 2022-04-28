const express = require('express');
const db = require('./config/mongoose');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.urlencoded());

// setting the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('assets'));
// use express router
app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(err)
    {
        console.log(`Error in running the server ${err}`);
        return;
    }

    console.log(`Server is up and running on port ${port}`);
})