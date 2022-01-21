const numbers = [1,5,9,10,15,200];
const result = [];
numbers.forEach(function(e) {
  if (e % 3 === 0) {
    result.push(e);
  } 
})
console.log(result);
