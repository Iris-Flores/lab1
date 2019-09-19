function candies(n,m){
  var res = 0;
  if (m >= n) {
    res = Math.trunc(m/n);
    return res*n;
  }
  else{
    return res;
  }
}
module.exports = candies
//console.log(candies(3,10));
