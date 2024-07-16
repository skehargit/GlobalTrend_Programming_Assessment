// Write a function that converts a given string to title case (capitalizing the first letter of each word).

// this question is repeted. it is same as question no.6 
function capitalize(str){
    const words= str.split(' ')
    for(let i =0 ;i<words.length;i++){
        words[i]=words[i][0].toUpperCase()+words[i].slice(1);
    }
    return words.join(' ');
}
const string = capitalize('this question is repeted. it is same as question no.6')
console.log(string)