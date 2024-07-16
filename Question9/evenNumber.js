// Write a function that filters out even numbers from an array.
function selectEvenNumbers(array){
    // const evenArray=[];
    // for(let i=0;i<array.length;i++){
    //     if(array[i]%2==0){
    //         evenArray.push(array[i])
    //     }
    // }
    // return evenArray;
    return array.filter(n=>n%2==0)
}
const evenArray= selectEvenNumbers([0,1,2,3,4,5,6,7,8,9])
console.log(evenArray);
