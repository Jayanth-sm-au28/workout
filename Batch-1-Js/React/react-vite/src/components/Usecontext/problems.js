//  write a function to double the chacter in the string
// apple ===== aappppllee


function doubleCharater(str){
    return str.split('').map(char => char + char).join('')
}

console.log(doubleCharater("Rose"))

// ===========================================================================================================

// find the missing number 

function findMissing(number){
    const fullSum = 55
    const currentSum = number.reduce((prev,curr)=>prev + curr,0)
    console.log(currentSum,"currentSum")
    return fullSum - currentSum
}

console.log(findMissing([4,5,6,7,8,9]))

// ===================================================================================================