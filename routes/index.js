// Load Module Dependencies
var express = require('express');

var customerRouter = require('./customer');
var assetRouter=require('./asset')
var truckRouter=require('./truck')
// Export Router Initializer
module.exports = function iniRouter(app) {
	
	// User Endpoint
	app.use('/customer', customerRouter)
	app.use('/asset',assetRouter)
	app.use('/truck',truckRouter)

};