array = [1, 3, 4, 45, 3, 234, 5, 23, 343, 987, 234, 34, 3, 43, 32678]

newAr = array.reduce((acc, cur) => Math.max(acc, cur), -1);
console.log(newAr)