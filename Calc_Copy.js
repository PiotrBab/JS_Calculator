let storeDisplayNum = '';
let currentValue;
let calculations = 0;
let lastOperation = ''

function pushNum(a){
    if(storeDisplayNum.length < 14){
        storeDisplayNum += a;
        document.getElementById("current").innerHTML= storeDisplayNum;
    }
    currentValue = Number(storeDisplayNum);
}

function arithmeticOperation(a){
    switch (a) {
    
        case '+':
            if(lastOperation == '-'){
                arithmeticOperation('-')
                lastOperation = '+'
            }else{
                if(calculations == 0){
                    calculations = Number(storeDisplayNum);
                    storeDisplayNum = '';
                    lastOperation = '+'
                    document.getElementById("chain").innerHTML= calculations;
                }else{
                    calculations += currentValue;
                    storeDisplayNum = '';
                    lastOperation = '+'
                    document.getElementById("chain").innerHTML= calculations;
                }
            }
        break;
        
        case '-':
            if(lastOperation == '+'){
                arithmeticOperation('+')
                lastOperation = '-'
            }else{
                if(calculations == 0){
                    calculations = Number(storeDisplayNum);
                    storeDisplayNum = '';
                    lastOperation = '-'
                    document.getElementById("chain").innerHTML= calculations;
                }else{
                    calculations -= currentValue;
                    storeDisplayNum = '';
                    lastOperation = '-'
                    document.getElementById("chain").innerHTML= calculations;
                }
            }
        break;
    
        default:
            break;
    }
}

function sum(){
    if (lastOperation == '+'){
        arithmeticOperation('+')
        document.getElementById("chain").innerHTML= `${calculations-currentValue} + ${currentValue}=`;
        document.getElementById("current").innerHTML= calculations;
        currentValue = 0;
        lastOperation = ''
    }else if(lastOperation == '-') {
        arithmeticOperation('-')
        document.getElementById("chain").innerHTML= `${calculations+currentValue} - ${currentValue}=`;
        document.getElementById("current").innerHTML= calculations;
        currentValue = 0;
        lastOperation = ''
    }
}

function clearAll(){
    document.getElementById("chain").innerHTML= '';
    document.getElementById("current").innerHTML= '';
    storeDisplayNum = '';
    currentValue = 0;
    calculations = 0;
    lastOperation = ''
}

function clearLast(){
    document.getElementById("current").innerHTML= '';
    storeDisplayNum = '';
}
