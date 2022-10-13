const express = require('express');
// const dotenv = require('dotenv');
const cors = require('cors');
const User = require("./config");

const app = express();
// dotenv.config();

app.listen(5000, console.log(`Running on PORT no ${5000}`))