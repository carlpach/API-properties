const express = require('express');

const { getProperties } = require("../controllers/property.controller");

const propertiesRouter = express.Router();

propertiesRouter.get('/', getProperties);

module.exports = propertiesRouter;