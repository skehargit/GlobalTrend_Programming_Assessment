// Write a function that takes an array and returns a new array with duplicates removed.
function removeDuplicates(arr){
    const newArr = new Set();
    for(let i=0;i<arr.length;i++){
        newArr.add(arr[i])
    }
    return Array.from(newArr);
}
const newArray = removeDuplicates([1,2,3,2,4,2,5,6,2,4,5,5,6,4,2,4,3,3,2])
console.log(newArray)