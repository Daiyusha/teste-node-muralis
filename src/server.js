const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
app.use(bodyParser.json());
app.use(routes);

app.listen(####); //Add your own port
