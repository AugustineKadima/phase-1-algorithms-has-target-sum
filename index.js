function hasTargetSum(array, target) {
  // Write your algorithm here
  if(array.length === 1) return array[0] === target
  let complementArray = []
  let n = array.length
  for(let i = 0; i < n; i++){
    let complement = target - array[i]
    complementArray.push(complement)
  }

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(array.includes(complementArray[j])){
        if (array[i] + complementArray[j] === target) return true
        else return false
      }else return false
      
    }
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  -loop through the array
  -find the complement of the current numer
  -add complement to an array
  - loop again while checking if numer in complement array plus numer in original array adds up to target
  -return true if target sum exists. else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
