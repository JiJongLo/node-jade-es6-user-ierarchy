var express = require('express');
var router = express.Router();
var myParser = require("body-parser");
var users = require('../public/users');
var _  = require('lodash');
var qs = require('querystring');
function findUserData(users, id){
  if(!_.isArray(users)){
    if(users.id === id)  return users;
    findUserData(users.children, id)
  }
  else{
    if(_.isEmpty(users)) return false;
    if(_.isArray(users)){
       for(var j =0;j<users.length; j++){
        var i = users[j];
        if(i.id === id){
         // console.log('33333333333333333333333333333333333333333333333333333______' + id, i);
          return _.clone(i);
        }
        else {
          if(_.isEmpty(i.children)) return false;
        //  console.log(i.children);
          findUserData(i.children, id)
        }
       }

    };
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/rest/update', function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  res.setHeader('Content-Type', 'application/json');
  var drag = req.body.drag;
  var select = req.body.select;
  var dragInfo = findUserData(users , drag);
  var selectInfo = findUserData(users , select);
    console.log(selectInfo)
  //console.log(dragInfo, drag)

});
module.exports = router;
