The scope of the variables declared by 'let' is within the block it is defined unlinke 'this' which is accessible outside the scope of the function when you
instantiate an object.

For example, The value of input2 is accessible outside the scope of the function but input1 is undefined. 

function printVal() {
   
 let input1 = 10;

 this.input2 = 10;
 
 }


var obj = new printVal();
console.log(obj.input1);
 
console.log(obj.input2);
printVal();
