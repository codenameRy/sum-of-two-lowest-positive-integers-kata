function sumTwoSmallestNumbers(numbers) {  
    var arr = numbers.sort(function(a, b) {
        return a - b;
    });
    return arr[0] + arr[1];
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), "Sum should be 13");

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), "Sum should be 16");
