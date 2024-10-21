  /*
Q8. Marks Calculator
Input Format
The input contains three numbers A�, B�and C�. Output Format
Return the required result.
Constraints
0≤A,B,C≤1000≤�,�,�≤100 Example
Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to
 calculate his total marks and his average.
 Note: You have to complete Sum and Average functions. No need to take any input.
 
Sample Input
 50 20 100
 Sample Output
 170 56.67
  */

 function Sum(A, B, C) {
    // Return the sum of the three marks
    return A + B + C;
}

function Average(A, B, C) {
    // Calculate and return the average of the three marks
    return (A + B + C) / 3;
}

// Example usage
const A = 50;
const B = 20;
const C = 100;

//total marks 
const total = Sum(A, B, C);

//  average marks
const average = Average(A, B, C);

console.log(total);        
console.log(average.toFixed(2));
