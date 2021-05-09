/**
 * GO TO THIS LINK AND SEND THE MESSAGE ON THE NUMBER TO START RECEIVING MESSAGE
 * https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+silent-pole&app_absent=0
 * 
 * RUN THE SERVER WITH COMMAND - 
 * npm install
 * node test.js
 * 
 * ----
 * open the html file to START checking every two minutes
 * 
 */

const express = require('express')
var cors = require('cors')
const app = express()
const accountSid = "ACb45c33323a4137cd5a336a9c939d2359";
const authToken = "1e8acc0ba602aecab9a58a64cfad150a";
const client = require("twilio")(accountSid, authToken);
app.use(cors())
app.get('/', (req, res) => {
    client.messages
      .create({
        body:
          "good",
        from: "whatsapp:+14155238886",
        to: "whatsapp:+919954188860",
      })
      .then((message) =>  res.send('Hello World!'+message.sid))
      .done();
 
})

app.listen(9000, () => {
  console.log(`Example app listening at http://localhost:9000`)
})

