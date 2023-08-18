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
  // let spawn = require("child_process").spawn;
  // let process = spawn('python', ["./hello.py", "I am Venkata My annual salary is 80000"]);

  // process.stdout.on('data', function(data) {
  //   res.send(data.toString());
  // })
  try {
  //   const data = {
  //     "PERSON": "X",
  //     "AGE": 35,
  //     "RETIREMENT_AGE": 67,
  //     "ANNUAL_SALARY": 45000,
  //     "RETIREMENT_AMOUNT": 2000,
  //     "LOCATION": "Texas"
  // }
  // res.send(data)
    // const resp = await axios.get('http://127.0.0.1:8010/retirewell/?text='+req.query.text)   
    const resp = await axios.get('http://3.111.194.62:8000/retirewell/?text='+req.query.text)    
    res.send(resp.data)    

  } catch (error) {
    console.error(error)
  }
}

app.listen(app.get('port'), async function() {
  console.log("Node app is running at localhost:" + app.get('port'))
  
  
//  https.get('http://localhost:8010/retirewell/?text=60000', (resp) => {
//   let data = '';

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message); 
// });

})
