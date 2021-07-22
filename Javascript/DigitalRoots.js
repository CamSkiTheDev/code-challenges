// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(num) {
    numArray = num.toString().split('')

    if(numArray.length === 1) return parseInt(numArray.join())

    sum = numArray.reduce((sum, num) => sum + parseInt(num), 0)

    return digital_root(sum)
} 
