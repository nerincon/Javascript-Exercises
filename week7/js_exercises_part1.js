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


//Caesar Cipher
alphabet = {' ':' ','a':'d','b':'e','c':'f','d':'g','e':'h','f':'i','g':'j','h':'k','i':'l','j':'m','k':'n','l':'o','m':'p','n':'q','o':'r','p':'s','q':'t','r':'u','s':'v','t':'w','u':'x','v':'y','w':'z','x':'a','y':'b','z':'c'}
reverse_a = { ' ': ' ', d: 'a', e: 'b', f: 'c', g: 'd', h: 'e', i: 'f', j: 'g', k: 'h', l: 'i', m: 'j', n: 'k', o: 'l', p: 'm', q: 'n', r: 'o', s: 'p', t: 'q', u: 'r', v: 's', w: 't', x: 'u', y: 'v', z: 'w', a: 'x', b: 'y', c: 'z' }


result = ''
function cipher(string){
    for(let i=0; i < string.length; i++){
        result += alphabet[string[i]]
    }
    console.log(result)
};

result2 = ''
function decipher(string_d){
    for(let i=0; i < string_d.length; i++){
        result2 += reverse_a[string_d[i]]
    }
    console.log(result2)
};

cipher('genius without education is like silver in the mine')
decipher('jhqlxv zlwkrxw hgxfdwlrq lv olnh vloyhu lq wkh plqh')


// // Function to reverse alphabet

// function reverseAlphabet(alphabet){
//     var ret = {};
//     for(var attr in alphabet){
//         var value = alphabet[attr];
//         ret[value] = attr
//     }
//     console.log(ret)
//     return ret;
// }