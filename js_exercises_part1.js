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