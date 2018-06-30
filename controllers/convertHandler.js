/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input){
    //var regx =[]
    //console.log(input.match(/\d.+/)[0])
  var result =input.replace(/[^0-9./]/g,'');
    if(result=='.' || result ==''){
     result =1;
    }
    console.log(result)
    return result;
  };
  
  this.getUnit = function(input) {
   var result =input.replace(/[0-9./]/g,'');
    
    console.log(result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const unit =["gal","L","lbs","Kg","mi","Km"];
    if(unit.indexOf(initUnit)>=0){
     if(initUnit=='gal'){
       result = "L"
      }
      else if(initUnit=='L'){
       result = "gal"
      }
      else if(initUnit=='lbs'){
       result = "Kg"
      }
      else if(initUnit=='Kg'){
       result = "lbs"
      }
      else if(initUnit=='mi'){
       result = "Km"
      }
      else if(initUnit=='km'){
       result = "mi"
      }
      return result;
    
    }
    else{
     return "invalid unit"
    }
    
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    if(unit=="mi"){
      return "miles"
    }
    else if(unit =="Km"){
     return "kelometer"
    }
    else if(unit =="L"){
     return "Litre"
    }
    else if(unit =="Kg"){
     return "Kilogram"
    }
    else if(unit=="lbs"){
      return "lbs"
    }
    else if(unit =="gal"){
      return "gal"
    }
    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const unit =["gal","L","lbs","Kg","mi","Km"];
    if(!isNaN(parseInt(initNum))&&(unit.indexOf(initUnit)>=0)){
      if(initUnit=='gal'){
       result = (initNum)*galToL
      }
      else if(initUnit=='L'){
       result = (initNum)/galToL
      }
      else if(initUnit=='lbs'){
       result = (initNum)*lbsToKg
      }
      else if(initUnit=='Kg'){
       result = (initNum)/lbsToKg
      }
      else if(initUnit=='mi'){
       result = (initNum)*miToKm
      }
      else if(initUnit=='km'){
       result = (initNum)/miToKm
      }
      return result;
    }
    else if(isNaN(parseInt(initNum))&&(unit.indexOf(initUnit)<0)){
     return "invalid number and unit"
    }
    else if(isNaN(parseInt(initNum))){
     return "invalid number"
    }
    else if(unit.indexOf(initUnit)<0){
     return "invalid unit"
    }
    else{
      return "i have no idea , what you passed"
    }
    console.log("result is "+result)
    var result;
    
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    const spell = this.spellOutUnit(initUnit); 
    return initNum +" "+ spell +" converts to "+returnNum +" "+returnUnit
    
  };
  
}

module.exports = ConvertHandler;
