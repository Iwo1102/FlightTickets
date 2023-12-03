let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb://localhost:27017/db');

let ticketSchema = new Schema({
  ticketId: String,
  ticketNumber: String,
  cost: String,
  departureTime: String,
  duration: String,
  departure: String,
  destination: String,
  image: String,
}, { collection: 'tickets' });

let tickets = oldMong.model('tickets', ticketSchema);

router.get('/', async function (req, res, next) {
  const meetings = await getTickets();
  res.render('index');
});

router.post('/getTickets', async function (req, res, next) {
  const tickets = await getTickets();
  res.json(tickets);
});

async function getTickets() {
  data = await tickets.find().lean();
  console.long(tickets)
  return { ticekts: data };
}

/*router.post('/saveMeeting', async function (req, res, next) {
  const meetings = await saveMeeting(req.body);
  res.json(meetings);
});

async function saveMeeting(theMeeting) {
  console.log('theMeeting: ' + theMeeting);
  await meetings.create(theMeeting,
    function (err, res) {
      if (err) {
        console.log('Could not insert new meeting')
        return { saveMeetingResponse: "fail" };
      }
    }
  )
  return { saveMeetingResponse: "success" };
}*/

module.exports = router;