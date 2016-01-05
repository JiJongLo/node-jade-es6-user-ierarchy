var express = require('express');
var router = express.Router();
var myParser = require("body-parser");
var users = require('../public/users');
var fileName = "../public/users";
var _  = require('lodash');
var qs = require('querystring');
var fs = require('fs');
function findUserData(users, id){
    var buffer = {};
    if (!_.isArray(users)) {
        if (_.isEmpty(users))return buffer;
        if (users.id === id) buffer = _.clone(users);
        if (_.isEmpty(users.children)) return {};
        buffer = _.assign(buffer, findUserData(users.children, id))
    }
    else {
        if (_.isEmpty(users)) return buffer;
        if (_.isArray(users)) {
            for (var j = 0; j < users.length; j++) {
                var i = users[j];
                if (i.id === id) {
                    buffer = _.clone(i);
                    return buffer;
                }
                else {
                    if (!_.isEmpty(i.children))  buffer = _.assign(buffer, findUserData(i.children, id));
                }
            }

        };
    }
    return buffer;
}
function replaceUserData(users, id, data) {
    if (_.isArray(users)) {
        var correct = _.map(users, function(i) {
            if (i.id === id && !i.write) {
                i.name = data.name;
                i.write = true;
                i.id = data.id;
                return i;
            }
            else {
                if (!_.isEmpty(i.children))  i.children = replaceUserData(i.children, id, data);
                return i
            }
        });
    }
    ;
    return correct;
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
    var usersForSend = replaceUserData([users], drag, selectInfo)[0];
    usersForSend = replaceUserData([usersForSend], select, dragInfo)[0];
    //fs.writeFileSync(fileName, JSON.stringify(usersForSend));
    res.send(JSON.stringify(usersForSend));
  //console.log(dragInfo, drag)

});
module.exports = router;
