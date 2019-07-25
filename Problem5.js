// Write a function to remove duplicate strings from an array of strings. 
 
 function removeDuplicate(array){
  array = array.filter((item,index) => 
   {return array.indexOf(item) === index});
   return array;
}

console.log(removeDuplicate(['car','jeep','bike','car','suv','bicycle','bike']));
