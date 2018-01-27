const express = require('express');

const fs = require('fs');


var app = express();
const port = process.env.PORT || 3000;

//app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));





//hbs.registerHelper('QUESTION', () => {
  //return new Question().
//});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
