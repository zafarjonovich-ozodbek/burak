function missingNumber(numbers) {
  for (let i = 0; i <= numbers.length; i++) {
    if (!numbers.includes(i)) {
      return i;
    }
  }
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
