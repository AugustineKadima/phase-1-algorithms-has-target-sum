function hasTargetSum(array, target) {
  // Write your algorithm here
  if(array.length === 1) return array[0] === target
  let n = array.length
  for(let i = 0; i < n; i++){
    let complement = target - array[i]
    for(let j = 0; j < n; j++){
      if(array[j] === complement && i != j) return true
    } 
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  time complexity = O(n2)
*/

/* 
  Add your pseudocode here
  -loop through the array
  -find the complement of the current numer
  -loop again while checking if array has complement
  -return true if complement exists. else return false
*/

/*
  Add written explanation of your solution here
  - Our function takes in an array of numbers and a target. We are finding two numbers that add 
  up to the target. Our outer loop helps us find the complement, the other number that when added 
  to the current number will give us the target. We then loop again while checking if the complement 
  exists. If it exists we know that we can we have two numbers that can add up to
  the target. We then return true. if the complement doesn't exist we return false
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
