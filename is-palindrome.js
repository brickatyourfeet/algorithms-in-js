

function isPalindrome(string){
    string = string.toLowerCase()
    var charactersArray = string.split('')
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    var lettersArray = []
    charactersArray.forEach(char => {
        if(validCharacters.indexOf(char) > -1){
            lettersArray.push(char)
        }
    })
    
    if(lettersArray.join('') === lettersArray.reverse().join('')){
        return true
    }else{
        return false
    }
    
    
    //return true or false
}


console.log(isPalindrome("not a palindrome"))
console.log(isPalindrome("Madam I'm Adam"))