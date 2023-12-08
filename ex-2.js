//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  spec = /[\W_]/g;
  s = s.toLowerCase().replace(spec, "");
  back = s.length - 1;

  for (let front = 0; front < s.length / 2; front++) {
    if (s[front] !== s[back]) {
      return false;
    }
    back--;
  }
  return true;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
