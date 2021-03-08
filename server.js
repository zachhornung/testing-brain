'use strict';

const express = require('express');
require('dotenv').config();
const superagent = require('superagent');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT;
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get('/', homeGet);

function homeGet(req, res) {
  console.log(req.body);
  
  res.render('pages/index.ejs');
}

app.listen(PORT, () => console.log(`up on http://loaclhost:${PORT}`));