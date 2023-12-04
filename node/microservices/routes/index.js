let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb://127.0.0.1:27017/db');

let ticketSchema = new Schema({
  ticketId: String,
  ticketNumber: String,
  cost: String,
  departureTime: String,
  duration: String,
  departure : String,
  destination : String,
  image : String
}, { collection: 'tickets' });

let tickets = oldMong.model('tickets', ticketSchema);

router.get('/', async function (req, res, next) {
  const tickets = await getMeetings();
  res.render('index');
});

router.post('/getMeetings', async function (req, res, next) {
  const tickets = await getMeetings();
  res.json(tickets);
});

async function getMeetings() {
  data = await tickets.find().lean();
  return { tickets: data };
}

router.post('/saveMeeting', async function (req, res, next) {
  const tickets = await saveMeeting(req.body);
  res.json(tickets);
});

async function saveMeeting(theMeeting) {
  console.log('theMeeting: ' + theMeeting);
  await tickets.create(theMeeting,
    function (err, res) {
      if (err) {
        console.log('Could not insert new meeting')
        return { saveMeetingResponse: "fail" };
      }
    }
  )
  return { saveMeetingResponse: "success" };
}

module.exports = router;