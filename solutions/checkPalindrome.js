function checkPalindrome (cadena){
  var count = cadena.length;
  var nuevaP = "";
  while(count>-1){
    nuevaP = nuevaP + cadena.charAt(count);
    count--;
  }
  if(nuevaP==cadena){
    return "true";
  }
  else{
    return "false";
  }

}
var inputString="aabaa";
//console.log(checkPalindrome(inputString));
module.exports= checkPalindrome
