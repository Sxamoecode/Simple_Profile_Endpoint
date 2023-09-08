const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const {data} = require('./model/data');
const app = express();


app.use(morgan('dev'));
app.use(cors({
    origin: '*',
    methods: ['GET', 'HEAD'],
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


app.get('/api', (req, res) => {
   try {
      const { slack_name, track } = req.query;
      if (!slack_name || !track) {
         return res.status(404).send('Wrong params, pls enter required params')
      }
      data.slack_name = slack_name;
      data.track = track;

      const now = new Date();
      data.utc_time = now.toISOString().split(".")[0] + "Z"
      return res.status(200).json(
         data
      );
   } catch (error) {
      console.error(error.message);
      return res.status(500).json({
         Msg: 'Server error, pls check back later'
      })
   }
})

 module.exports = app;