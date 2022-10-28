
function calculateSum(){
    var firstNum = parseInt(document.getElementById('firstNum').value)
    var secondNum = parseInt(document.getElementById('secondNum').value)

    var result = firstNum + secondNum;

    document.getElementById('outPut').innerHTML = result
}

function calculateSubtract(){
    var firstNum = parseInt(document.getElementById('firstNum').value)
    var secondNum = parseInt(document.getElementById('secondNum').value)

    var result = firstNum - secondNum;

    document.getElementById('outPut').innerHTML = result
}