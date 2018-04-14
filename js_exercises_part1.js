// Madlib
function madlib(name, subject){
    console.log(name+"'s favorite subject in school is "+subject);
}
madlib("Nelson", "Coding")

// Tip Calculator
function tipCalc(check_amount, service){
    if(service=='good'){
        var tip = check_amount * 0.20
    } else if (service=='fair') {
        var tip = check_amount * 0.15
    } else if (service=='bad'){
        var tip = check_amount * 0.1
    }
    var total = check_amount + tip
    console.log('Tip Amount: '+tip)
    console.log('Total Amount : '+total)
}
tipCalc(100, 'fair')

//Print Numbers
for(var i=1; i < 11; i++){
    console.log(i)
}
//Print a Square
function printSquare(num){
    for(i = 0; i < 5; i++){
        console.log('*'.repeat(num))
    }
}
printSquare(5)

//Print a box
function printBox(w, h){
    console.log('*'.repeat(w))
    for(i=0; i < h-2; i++){
        console.log('*' + ' '.repeat(w-2) + '*')
    }
    console.log('*'.repeat(w))
}

printBox(6,4)


// Print a Banner
function printBanner(context){
    var w = context.length
    var h = 3
    console.log('*'.repeat(w+4))
    for(i = 0; i < h-2; i++){
        console.log('*' + ' ' + context + ' ' + '*')
    }
    console.log('*'.repeat(w+4))
}
printBanner('Welcome to DigitalCrafts')


// Leetspeak
function leetSpeak(string){
    leet = {"A":4,"E":3,"G":6,"I":1,"O":0,"S":5,"T":7}
    result = ""
    for(i = 0; i < string.length; i++){
        if(string[i] in leet){
            result += leet[string[i]]
        } else{
            result += string[i]
        }
    }
    console.log(result)
}

leetSpeak("HELLO")


// Long-long Vowels
function longVowel(string){
    l_string = ''
    if(string.includes('oo')){
        l_string = string.replace('oo', 'ooooo')
        console.log(l_string)
    } else if(string.includes('ee')){
        l_string = string.replace('ee', 'eeeee')
        console.log(l_string)
    }
}

longVowel('Cheese')

// Just the positives
function positiveNumbers(arr){
    n_array = []
    for(i=0; i < arr.length; i++){
        if(arr[i] >= 0){
            n_array.push(arr[i])
        }
    }
    console.log(n_array)
}

positiveNumbers([1, -3, 5, -3, 0])
positiveNumbers([1, 2, 3])
positiveNumbers([-1, -2, -3])

