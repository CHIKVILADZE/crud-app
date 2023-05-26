const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const contactsRouter = require('./routes/fetchContact.js');
const deleteRouter = require('./routes/deleteContact.js');
const updateRouter = require('./routes/updateContact.js');
const createRouter = require('./routes/createContact.js');

app.use(bodyparser.json());

app.use(express.json());

app.listen(3000, () => console.log('Server is running on port 3000'));
