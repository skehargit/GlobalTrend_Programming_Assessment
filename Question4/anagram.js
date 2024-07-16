// Write a function that checks if two given strings are anagrams of each other.
function checkingAnagram(str1,str2){
    console.log(str1.split('').sort().join('')===str2.split('').sort().join(''))
}
checkingAnagram("cat","act")