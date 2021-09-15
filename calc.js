let storeDisplayNum = '';
let storedNumber;

let arithmeticChain = [];

/*Collects user input and displays it in the calculator.*/
function getNum(a) {
    /*You can only enterr a digit longer than 14 characters.*/
    if (storeDisplayNum.length < 14) {
        storeDisplayNum += a;
        document.getElementById("current").innerHTML = storeDisplayNum;
    }
    storedNumber = Number(storeDisplayNum);
}

/*Function evaluate() allows you to perform calculations entered by the user.*/
function evaluate(arr) {
    let math = [...arr];

    while (math.length > 1) {
        if (math.indexOf('/') > 0) {
            let calc = math[math.indexOf('/') - 1] / math[math.indexOf('/') + 1]
            math.splice(math.indexOf('/') - 1, 3, calc);
        } else if (math.indexOf('*') > 0) {
            let calc = math[math.indexOf('*') - 1] * math[math.indexOf('*') + 1]
            math.splice(math.indexOf('*') - 1, 3, calc)
        } else if (math.indexOf('-') > 0) {
            let calc = math[math.indexOf('-') - 1] - math[math.indexOf('-') + 1]
            math.splice(math.indexOf('-') - 1, 3, calc);
        } else if (math.indexOf('+') > 0) {
            let calc = math[math.indexOf('+') - 1] + math[math.indexOf('+') + 1]
            math.splice(math.indexOf('+') - 1, 3, calc);
        }
    }

    return Number(math[0].toFixed(4));
}

/* Function push number and an arithmetic operation into arithmeticChain. */
function addToArr(a) {
    if (storedNumber != undefined) {
        /*Converts a percentage into a decimal number.*/
        if (arithmeticChain[1] === '%' && arithmeticChain.length < 1) {
            result()
        } else {
            /*Does not allow to enter an operation if no number is given*/
            if (storedNumber != '') {
                arithmeticOperations(a);
                /*Allows you to change an arithmetic operation.*/
            } else {
                arithmeticChain.pop();
                arithmeticChain.push(a);
                document.getElementById("chain").innerHTML = arithmeticChain.join('');
            }
        }
    }
}

/* Responsible for completing a correct math activity */
function arithmeticOperations(operationSign) {
    if (operationSign === '%' && arithmeticChain.length < 2) {
        arithmeticChain.push(storedNumber);
        arithmeticChain.push(operationSign);
        result();
    } else {
        arithmeticChain.push(storedNumber);
        arithmeticChain.push(operationSign);
        storeDisplayNum = '';
        storedNumber = 0;
        document.getElementById("current").innerHTML = '';
        document.getElementById("chain").innerHTML = arithmeticChain.join('');
    }
}

/*Function returns the result from our aritchemtic operation.*/
function result() {
    /*User has to enter an aritchemtical operation. If not, the function will not execute.*/
    if (arithmeticChain.length != 0) {
        if (arithmeticChain[1] === '%') {
            arithmeticChain.push(storedNumber);
            preperData();
        }
        
        if (storedNumber == 0) {
            arithmeticChain.pop();
            preperData();
        } else {
            arithmeticChain.push(storedNumber);
            preperData();
        }
    } else {
        document.getElementById("chain").innerHTML = `${storeDisplayNum}=`;
        document.getElementById("current").innerHTML = storeDisplayNum;
        storedNumber = Number(storeDisplayNum);
        storeDisplayNum = '';
    }
}

/* Prepares variables after the result for entry of new data */
function preperData() {
    document.getElementById("chain").innerHTML = `${arithmeticChain.join('')}=`;
    let doMath = evaluate(arithmeticChain);
    document.getElementById("current").innerHTML = doMath;
    storedNumber = doMath;
    storeDisplayNum = '';
    arithmeticChain = [];
}

/*The clearAll() function restarts the data entered into the calculator.*/
function clearAll() {
    document.getElementById("chain").innerHTML = '';
    document.getElementById("current").innerHTML = '';
    storeDisplayNum = '';
    storedNumber = undefined;
    arithmeticChain = [];
}

/*The clearLast() function restarts the last number before using an arithmetic operation.*/
function clearLast() {
    document.getElementById("current").innerHTML = '';
    storeDisplayNum = '';
    storedNumber = undefined;
}

/*Function change() allows you to perform calculations entered by the user.*/
function change() {
    storedNumber *= -1;
    document.getElementById("current").innerHTML = storedNumber;
}
