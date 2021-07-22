// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
    const letterObj = {}

    stringArray = string.toLowerCase().replace(/[^\w]/g, '').split('')
    stringArray.forEach(letter => letterObj[letter] = (letterObj[letter] || 0) + 1)

   if(Object.keys(letterObj).length < 26) return false

   return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!!!"))