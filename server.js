const express = require('express');
const technologger = require('technologger');
const parser = require('body-parser');

const app = express();

const userCount = {};

function userCountIncrement(email) {
  userCount[email] = userCount[email] ? userCount[email] + 1 : 1;
}

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

app.post('/users', (req, res) => {
  userCountIncrement(req.body.email);
  res.send(String(userCount[req.body.email]));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started on port ${process.env.PORT || 3000}`);
});
