/*
Q2. Find if the conditions are obeyed or not?
Input Format
The first line contains two integers A�and B�. Output Format
Return the result as true if the given condition gets satisfied, else false.
Constraints
You are given two number first as A� and second as B� and check if both conditions
(A<10�<10 and A>B�>�) are satisfied or not with the help of operators.
Note: You have to complete Is_Valid function. No need to take any input.
 1≤A,B≤5001≤�,�≤500
Example
 Sample Input
 5 3
 Sample Output
 
True/*



*/
//solved through function
/*
function Is_Valid(A, B) {
    
    if (A < 10 && A > B) {
        return true;
    } else {
        return false;
    }
}
*/
//solved without function


let A = 5;
let B = 3;
if (A < 10 && A > B) {
    console.log(true); 
} else {
    console.log(false);
}

