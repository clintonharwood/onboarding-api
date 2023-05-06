/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/*****************************************
 * onboarding service for BigCo, Inc.
 * 2019-01 mamund
 *****************************************/

var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');

var actions = require('./actions');
var properties = require('./properties');
var utils = require('./dorr-utils');


// set up request body parsing
router.use(bodyParser.json({type:properties.responseTypes}));
router.use(bodyParser.urlencoded({extended:properties.urlencoded}));

//set up response body templates
var representor = {};
representor.templates = properties.templates||[];
representor.pageLinks = properties.pageLinks||[];
representor.itemLinks = properties.itemLinks||[];
representor.pageForms = properties.pageForms||[];
representor.itemForms = properties.itemForms||[];

var object = "onboarding";

// tracking middleware
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now() + " : " + req.headers.host + req.url)
  next()
})

// output headers
router.use(function emitCORS (req, res, next) {
  if(properties.allowCORS && properties.allowCORS !== "") {
    res.set("Access-Control-Allow-Methods", properties.allowCORS);
  }  
  next()
})

// ********************************************
// the actions/capabilities of this service API
// ********************************************
// landing/home page
router.get('/',function(req,res){
  utils.handler(req,res,actions.blank, 'home', representor) 
});

// list of onboarding records
router.get('/list',function(req,res){
  utils.handler(req,res,actions.blank, 'list', representor) 
});

// single onboarding record
router.get('/:onboardingId',function(req,res){
  utils.handler(req,res,actions.blank, 'item', representor) 
});

// publish the capability routes
module.exports = router


