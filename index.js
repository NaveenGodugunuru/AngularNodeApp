var express = require('express')
var app = express()
var http = require('http');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
var cors = require('cors');
app.use(cors())

// const https = require('http');
const axios = require('axios');
const { request } = require('express');





app.get('/', callName)
async function callName(req, res) {
  console.log(req.query.text)
   try {
  //  const data = {
    //  "PERSON": "X",
    //  "AGE": 35,
    //  "RETIREMENT_AGE": 67,
    //  "ANNUAL_SALARY": 45000,
    //  "RETIREMENT_AMOUNT": 2000,
    //  "LOCATION": "Texas"
 // }
  // // res.send(data)
    // const resp = await axios.get('http://127.0.0.1:8010/retirewell/?text='+req.query.text)   
    const resp = await axios.get('http://13.235.18.174:8000/retirewell/?text'+req.query.text)    
    res.send(resp.data)    

  } catch (error) {
    console.error(error)
  }
}

app.listen(app.get('port'), async function() {
  console.log("Node app is running at localhost:" + app.get('port'))
  
})


