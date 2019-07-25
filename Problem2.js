//Write a function which accepts an array of strings and returns a map of character to count of the character(including spaces and special characters).

//Eg: input: [‘hello world’, ‘hello world’]  output: {h: 2, e: 2, l: 6, ‘ ‘: 1, o: 4 …… }


function charCount(arr) {
 
 const str = arr.join('');
  
let output = {};
  
const strTemp = str.split('').filter((item,index) => 
  
 {return str.indexOf(item) === index})
   
   
strTemp.forEach((element,index)=>{
      
  let count = 0
     
  str.split('').forEach(element => {
     
      if(strTemp[index] == element){
      
         count+=1;
           }
       })
    
   output[strTemp[index]] = count;
   })
  

  return output;
  
  
}
