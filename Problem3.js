//Write a function to return all the keys present in an object at any level.

//Eg: input: {  a: 5, b: { c: { d: 10 } }}   output: [a, b, c, d]

var input = {  a: 5, b: { c: { d: 10 } }} ;
var output = [];

function findKey(obj) {
 
  for(var key in obj){
   if(typeof(obj[key]) === 'object'){
      output.push(key);
       findKey(obj[key]);
   }else{
       output.push(key);
   }
    }
return output;
}

console.log(findKey(input));
