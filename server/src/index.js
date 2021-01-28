'use strict';

const express = require('express');
const cors = require('cors');
const data = require('./data');
const apiBands = require('./api/bands');
const bands = require('./data/bands');


console.clear();

data.init();

const server = express();
server.use(cors());
server.use(express.json());

const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/api/bands', apiBands.getBands);
server.get('/api/newBands', apiBands.getNewBands);
server.post('/api/newBands', apiBands.postNewBand);
// server.delete('/api/newBands/id', apiBands.deleteRockBand);

server.delete('/api/deleteBand', apiBands.deleteRockBand);