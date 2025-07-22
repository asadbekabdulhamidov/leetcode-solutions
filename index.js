const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // 7
    if (map.has(complement)) {
      // 7 map ichida bormi ? false
      return [map.get(complement), i];
    }
    map.set(nums[i], i); // mapga qoshadi numsni o-sini shudaynmi
  }
};

let res = twoSum([2, 7, 11, 15], 9);
// let res = twoSum([3,2,4], 6);
// let res = twoSum([3,3], 6);

//===============================================

// problem 2 isPolindrome
function isPalindrome(num) {
  let arrNum = num.toString().split('').reverse().join('');
  if (Number(arrNum) === num) {
    return true;
  } else {
    return false;
  }
}
