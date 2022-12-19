function sumEvenNumbers(numbers) { //a function for easier coding
    let sum = 0; //we make a sum variable so we can add to it.

    for (let i = 0; i < numbers.length; i++) { //i is zero. the first number in the array is 1, so i = 0 will represent the 1st number.
        if (numbers[i] % 2 == 0) { //checks is the number even 
            sum += numbers[i]; // this code means: sum = sum + numbers[i]. we write += for an easier way to type it
        }
    }
    return sum; //returns the sum
  }
  
  // Test the function with some sample inputs
  console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // should output 6 (2 + 4)
  console.log(sumEvenNumbers([10, 11, 12, 13, 14])); // should output 36 (10 + 12 + 14)
  console.log(sumEvenNumbers([2, 4, 6, 8, 10])); // should output 30 (2 + 4 + 6 + 8 + 10)
  

// numbers[i] - i represents the array number. for example: 
//  console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
// if i = 1, then the number it represents is 2. (arrays go from zero to infinity)
// if i = 4, then the number it represents is 5.