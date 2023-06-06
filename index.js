const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

PORT = process.env.PORT;

const propertiesRoutes = require("./src/api/routes/property.routes")

const {connect} = require('./src/utils/db');

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/properties", propertiesRoutes);

app.listen(PORT,  () => console.log('listening on port', PORT));
