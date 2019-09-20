function palindromo(cadena){
  t=cadena.length;
  if(t==0){function palidromo (cadena)}
  t=cadena.length;
  if(t==0){
    return false;
  }
  for(i=0;i<t/2;i++)
  {
      if(cadena[i] != cadena[t-1-i]){
        return false;
      }
    }
    return true;
}
console.log(palindromo("aabaa"));
module.exports=palindromo
