// Write a function that takes a string and capitalizes the first letter of each word in the string.

function capitalize(str){
    const words= str.split(' ')
    for(let i =0 ;i<words.length;i++){
        words[i]=words[i][0].toUpperCase()+words[i].slice(1);
    }
    return words.join(' ');
}
const string = capitalize('Write a function that takes a string and capitalizes the first letter of each word in the string')
console.log(string)