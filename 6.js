/*
Q6.Find the remainder
You are provided with two numbers A�and B�where A�as divisor and B�as dividend.Your task is find the remainder.
Note: You have to complete Find_the_remainder function. No need to take any input.
 
Input Format
The first line of the input contains two integers A�and B�.
Output Format
Return the result after finding the remainder.
Constraints
1≤A,B≤10001≤�,�≤1000 Example
Sample Input
29
Sample Output
1
*/


function Find_the_remainder(A, B) {
   
    return B % A;
}


const A = 29;
const B = 1000;
console.log(Find_the_remainder(A, B)); 
