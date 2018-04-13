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


