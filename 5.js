
/*
Q5.Find the last digit of a 4 digit number
You are provided a four digit number N only. Your task is to print out the last digit of that
number.
Note: You have to complete Last_Digit function. No need to take any input.
Input Format
The first line contains one four digit natural number N�. Output Format
Return the required result. without loop
Constraints
1000≤N≤99991000≤�≤9999
Example
Sample Input
4567
Sample Output
7  */


function Last_Digit(N) {
    // Return the last digit of the number N
    return N % 10;
}


const N = 4567;
console.log(Last_Digit(N));  



