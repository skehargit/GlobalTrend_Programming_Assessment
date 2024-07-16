// Write a function that generates the first n numbers of the Fibonacci sequence
function generateFibonacci(n){
    if(n<=0)return [];
    if(n==1)return [0]
    if(n==2)return [0,1]
    let fibonacciArray=[0,1]
    for(let i=3;i<=n;i++){
        fibonacciArray.push(fibonacciArray[i-2]+fibonacciArray[i-3])
    }
    return fibonacciArray
   
}
const fib=generateFibonacci(10);
console.log(fib);