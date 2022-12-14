 function stringLength(s){
    if(s.length>1 && s.length<10){
        return s.length
    }
    else return "Please enter at least 1 character long and not longer than 10"
    
}

module.exports = stringLength;