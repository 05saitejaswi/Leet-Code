/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

TC-O(max(n,m)
SC-O(max(n,m))
*/

//iterate last to front, add each num plus the remainder carry num
const addStrings = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;

  let carry = 0;
  let result = '';

  for (;i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const digit1 = i < 0 ? 0 : Number(num1[i]);
    const digit2 = j < 0 ? 0 : Number(num2[j]);
    const digitSum = digit1 + digit2 + carry;
    carry = Math.floor(digitSum / 10);
    result = (digitSum % 10) + result;
  }
  return result;
};


