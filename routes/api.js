/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);  
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log(toString)
      //res.json
    if(returnNum =="invalid unit"){
     res.json({msg:"invalid unit"})
    }
    else if(returnNum =="invalid number"){
      res.json({msg:"invalid number"})
    }
    else if(returnNum=="invalid number and unit"){
      res.json({msg:"invalid number and unit"})
    }
    else {
     res.json({inintNum :initNum ,initUnit: initUnit,returnNum : returnNum, returnUnit : returnUnit,string : toString})
    }
    });
    
};
