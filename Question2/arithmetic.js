// Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function calculation(str){
    let number ='';
    let arr=[]
    for(let i=0;i<str.length;i++){
        if(isNaN(str[i])){
            arr.push(number)
            number=''
            arr.push(str[i])
        }else{
            number+=str[i];
        }
    }
    arr.push(number)
    let result =Number(arr[0]);
    for(let i=2;i<arr.length;i+=2){
        if(arr[i-1]=='+'){
            result+=Number(arr[i])
        }else if(arr[i-1]=='-'){
            result-=Number(arr[i])
        }
    }
    return result;
}
const result = calculation('230+234+342-15-533+522');
console.log(result);