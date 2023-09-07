const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const {response} = require('./model/data');
const app = express();


app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:6600'
 }));
 app.use(bodyParser.json());
 app.use(express.urlencoded({
    extended: false
 }))
 app.use(bodyParser.urlencoded({
    extended: true
 }))
 app.use((error, req, res, next) => {
   res.status(500).json({ error: error.message });
});


app.get('/data', (req, res) => {
   try {
      const { slack_name, track } = req.query;
      response.slack_name = slack_name;
      response.track = track;
      return res.status(200).json({
         response
      });
   } catch (error) {
      console.error(error.message);
      return res.status(500).json({
         Msg: 'Server error, pls check back later'
      })
   }
})

 module.exports = app;