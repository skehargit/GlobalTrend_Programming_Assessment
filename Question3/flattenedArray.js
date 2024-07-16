// Write a function that takes a nested array and returns a flattened array.
function nestedToflattened(arr){
    let resultArr=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            resultArr.push(arr[i][j]);
        }
    }
    return resultArr
}
const flattenedArray=nestedToflattened([[1,2,3,4],[1,5,3,7,8],[9,3,5,1,9]])
console.log(flattenedArray);