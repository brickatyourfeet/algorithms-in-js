// time complexity O(n)
//technically O(n) + O(m) because of the two loops not nested, that are different number of inputs  O(n + m)

function harmlessRansomNote(noteText, magazineText){
    var noteArray = noteText.split(' ')
    var magazineArray = magazineText.split(' ')
    //the magazine object will be a hash table
    var magazineObject = {}
    
    magazineArray.forEach(word =>{
        if(!magazineObject[word]){
            magazineObject[word] = 0
        }
        magazineObject[word]++    
    })
    
    var noteIsPossible = true
    noteArray.forEach(word => {
        if(magazineObject[word]){
            magazineObject[word]--
            if(magazineObject[word] < 0) noteIsPossible = false
        }else noteIsPossible = false
    })
    
    return noteIsPossible
}

console.log(harmlessRansomNote('this is a secret note for you, secret', 'this is all of the magazine text in a magazine. there may be a word secret in here twice The note is not for you, but this is. A. a this is a  note for you'))



///these two are the same thing 
//magazineArray.forEach(function(word){
//        
//    })
//
//magazineArray.forEach(word => {
//        
//    })