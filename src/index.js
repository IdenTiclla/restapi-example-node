require('colors');
const express = require('express');
const app = express();

const morgan = require('morgan');


// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); // para formatear el json en el cliente 
// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // para recivir informacion json


// routes
app.use(require('./routes/index'));
app.use(require('./routes/movies'));
app.use(require('./routes/users'));


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`.red);
});
