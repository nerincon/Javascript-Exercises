// Object as Dictionary Exercises

// Exercise 1
var phonebookDict = {
    Alice: '703-493-1834',
    Bob: '857-384-1234',
    Elizabeth: '484-584-2923'
  }
//Print Elizabeth's phone number.
var result = phonebookDict['Elizabeth']
console.log(result)

// Add a entry to the dictionary: Kareem's number is 938-489-1234.
phonebookDict.Kareem = '938-489-1234'
console.log(phonebookDict)

// Delete Alice's phone entry.
delete phonebookDict.Alice
console.log(phonebookDict)

// Change Bob's phone number to '968-345-2345'.
phonebookDict.Bob = '968-345-2345'
console.log(phonebookDict)

// Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry. Use a for...in loop to print all the phone entries.
personName = 'Elizabeth'
console.log(phonebookDict[personName])

for(attr in phonebookDict){
    var value = phonebookDict[attr]
    console.log(`${attr}: ${value}`)
}

// Letter Histogram
 function letterHistogram(string){
     obj = {}
    for(let i = 0; i < string.length; i++){
        var letter = string[i];
        obj[letter] = (obj[letter] || 0) + 1;
    }
    console.log(obj)
 }

 letterHistogram('bananas')


 // Word Histogram
 function wordHistogram(string){
    var split = string.split(" ");
    obj = {}
   for(let i = 0; i < split.length; i++){
        if(obj[split[i]]===undefined){
            obj[split[i]]=1;
        } else{
            obj[split[i]]++;
        }
    }
        console.log(obj)
}

wordHistogram('to be or not to be')