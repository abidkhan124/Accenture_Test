//Write a function to reverse every word of a string.

// Using split and reverse

function reverseString(str) {
   const arr = str.split(' ');
  
 let output = [];
       
arr.forEach(element => {
          
           
output.push(element.split('').reverse().join(''));
           
       
});
   
return output.join(' ');
}

console.log(reverseString('Hello World!'));

//Without using split and reverse and in O(1) space (since strings are immutable, assume that the input is a character array).

