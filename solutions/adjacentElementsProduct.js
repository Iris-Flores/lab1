function adjacentElementsProduct(a){
  var product = 100;
  var mayor = 0;
  for (var i=0; i < a.length; i++){
    product = a[i]*a[i+1];
    if (product >= mayor){
      mayor=product;

    }
  }
  return mayor;
}
var inputArray = [3,6,-2,-5,7,3];
//console.log(adjacentElementsProduct(inputArray));
module.exports=adjacentElementsProduct
hola haciendo pueba 1
