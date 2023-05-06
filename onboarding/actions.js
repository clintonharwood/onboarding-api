/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/*****************************************
 * onboarding capabilities for BigCo, Inc.
 * 2019-01 mamund
 *****************************************/

var component = require('./dorr-component');
var properties = require('./properties');

/*****************************************
 * action handles for company service
 *****************************************/

 module.exports.blank = function(req,res) {
  return new Promise(function(resolve,reject) {
    var body = [];
    if(body) {
      resolve(body);
    }
    else {
      reject({error:"invalid body"});
    }
  });
}

/**************************
module.exports.create = function(req,res) {
  return new Promise(function(resolve,reject) {
    if(req.body) {
     var body = req.body;
     resolve(
      component(
        { 
          name:'activity',
          action:'add',
          item:body,
          props:properties.props,
          reqd:properties.reqd, 
          enums:properties.enums
        }
       )
     );
    }
    else {
      reject({error:"invalid body"});
    }
  });
};

module.exports.list = function(req,res) {
  return new Promise(function(resolve,reject) {
    resolve(component({name:'activity',action:'list'}));
  });
}

module.exports.filter = function(req,res) {
  return new Promise(function(resolve,reject){
    if(req.query && req.query.length!==0) {
      resolve(component({name:'activity',action:'filter',filter:req.query}));
    }
    else {
      reject({error:"invalid query string"});
    }
  })
}

module.exports.read = function(req,res) {
  return new Promise(function(resolve,reject){
    if(req.params.activityId && req.params.activityId!==null) {
      var id = req.params.activityId;
      resolve(component({name:'activity',action:'item',id:id}));
    } 
    else {
      reject({error:"missing id"});
    }
  });
}

module.exports.update = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.activityId||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'activity',
          action:'update',
          id:id,
          item:body,
          props:properties.props,
          reqd:properties.reqd,
          enums:properties.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

module.exports.status = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.activityId||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'activity',
          action:'update',
          id:id,
          item:body,
          props:properties.props,
          reqd:properties.reqd,
          enums:properties.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

module.exports.close = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.activityId||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'activity',
          action:'update',
          id:id,
          item:body,
          props:properties.props,
          reqd:properties.reqd,
          enums:properties.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}
*****************************************/

