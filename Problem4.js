//Write a function to reverse every word of a string.

// Using split and reverse

function stringReverse(str) {
   const arr = str.split(' ');
  
 let output = [];
       
arr.forEach(element => {
          
           
output.push(element.split('').reverse().join(''));
           
       
});
   
return output.join(' ');
}

console.log(stringReverse('Hello World!'));

//Without using split and reverse and in O(1) space (since strings are immutable, assume that the input is a character array).

var input = 'Hello World';
var inputStr = Array.from(input);
function stringReverse(str){
    var first = 0;
    for(var i = 0; i <= str.length; i++){
        if((str[i] == ' ') || (i == str.length)){
        var last = i-1;
        while(first < last){
            [str[first],str[last]] = [str[last],str[first]];
            first++;
            last--;
            
        }
        first = i+1;
    }
    }
    return str;
}

console.log(stringReverse(inputStr));

