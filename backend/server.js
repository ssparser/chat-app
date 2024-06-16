const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const http = require("http")
const sequelize = require('./util/database');

const authRoutes = require('./routes/authRoutes');

require('dotenv').config();


const PORT  = process.env.PORT || process.env.API_PORT

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

const server = http.createServer(app);

sequelize.sync()
.then(result => {
    console.log(result);
}).catch(err => {
    console.error('Database sync error:', err);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
