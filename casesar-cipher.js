

function caesarCipher(string, num){
    num = num % 26  //this will make sure the number entered is within the alphabet (26)
    var lowerCaseString = string.toLowerCase()
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newString = ''
    
    for(let i = 0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i]
        if(currentLetter === ' '){
            newString += currentLetter
            continue
        }
        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + num
        if(newIndex > 25) newIndex = newIndex - 26   //loops back to the beginning of the alphabet - z is index 25
        if(newIndex < 0) newIndex = 26 + newIndex    //this is in case it goes below zero with a negative number, loops back the other way, a is index 0
        
        if(string[i] === string[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase()
        }else{
            newString += alphabet[newIndex]
        }
        
    }
    return newString
}

console.log(caesarCipher('zoo keeper', 2))

console.log(caesarCipher('words shifter -900 times', -900))