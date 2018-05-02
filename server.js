if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const express = require('./config/express');
const  mongoose = require('./config/mongoose');

var db = mongoose();


const app = express();

app.listen(app.get('port'), () => {
    console.log('Server listening on port', app.get('port'));
});

module.exports = app;