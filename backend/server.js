const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const http = require("http")
const mongoose = require('mongoose');
require('dotenv').config();

const PORT  = process.env.PORT || process.env.API_PORT

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
