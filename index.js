require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const helmet = require('helmet');
const { FIXED_VALUES } = require('./connection/index');

// authentication
require("./connection/passport");

app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json({ limit: "20mb" }));

app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cookieParser());

app.use(helmet())

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

require("./routes")(app);
