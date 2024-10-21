/*
Q3.Check the conditions
You are given two numbers A�and B�. You need to do the following checks:
1. if both are divisible by 10 console true.
2. if both are not divisible by 10 console false.
3.
Q3.Check the conditions
You are given two numbers A�and B�. You need to do the following checks:
if one of them only is divisible by 10 console true.
Use operator to do this.
Note: You have to complete Check function. No need to take any input.
Input Format
The first line contains two natural numbers A�and B�. Output Format
Return the required result.
Constraints
1≤A,B≤100001≤�,�≤10000 Example
Sample Input
12 20
Sample Output
true
*/
//with function
/*
function Check(A, B) {
    
    if (A % 10 === 0 && B % 10 === 0) {
        return true;
    }
    
    else if (A % 10 !== 0 && B % 10 !== 0) {
        return false;
    }
    
    else if (A % 10 === 0 || B % 10 === 0) {
        return true;
    }
    return false;
}

let A = 12;
let B = 20;
let result = Check(A, B);
console.log(result);
*/
//without function

let A = 12;
let B = 20;


if (A % 10 === 0 && B % 10 === 0) {
    console.log(true);
}

else if (A % 10 !== 0 && B % 10 !== 0) {
    console.log(false);
}

else if (A % 10 === 0 || B % 10 === 0) {
    console.log(true);  
}
