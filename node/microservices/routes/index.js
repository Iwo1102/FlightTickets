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
  const tickets = await getTickets();
  res.render('index');
});

router.post('/getTickets', async function (req, res, next) {
  const tickets = await getTickets();
  res.json(tickets);
});

async function getTickets() {
  data = await tickets.find().lean();
  return { tickets: data };
}

router.post('/updateTickets', async function (req, res, next) {
  const tickets = await updateTickets(req.body);
  res.json(tickets);
});

async function updateTickets(ticket) {
  let qeury = { ticketId: ticket.ticketId };
  let newValue = {$set: { ticketNumber: ticket.newTicketNum}};
  data = tickets.updateOne(qeury, newValue, function (err, res) {
    if (err) {
      console.log('Could not update ticket number')
      return { updateTicketsResponse: "fail" };
    }})
  return { updateTicketsResponse: "success" };
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