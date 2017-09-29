//returns each word reversed but not the entire string
//does not use the array.reverse method


function reverseWords(string){
    var wordsArray = string.split(' ')
    var reversedWordsArray = []
    
    wordsArray.forEach(word => {
        var reversedWord = ''
        for(var i = word.length - 1; i >= 0; i--){
            reversedWord += word[i]
        }
        reversedWordsArray.push(reversedWord)
    })
    
    return reversedWordsArray.join(' ')
}

console.log(reverseWords('this is a string of words'))