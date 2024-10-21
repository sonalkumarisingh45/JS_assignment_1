/*
You are provided a four digit number N only. Your task is to print out the first digit of that
 number.
 Note: You have to complete First_Digit function. No need to take any input.
 Input Format
The first line contains one four digit natural number N�.
Output Format
Return the required result.
Constraints
1000≤N≤99991000≤�≤9999 Example
4
Sample Input
 4567
 Sample Output
 */
//with function
 function First_Digit(N) {
    
    return parseInt(N.toString()[0]);
}

let N = 4567;
let result = First_Digit(N);
console.log(result);  
//without functionlet N = 4567;

let firstDigit = parseInt(N.toString()[0]);

console.log(firstDigit);  


 
