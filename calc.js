let storeDisplayNum = '';
let storedNumber;

let arithmeticChain = [];

let test;

function onOff(){
    document.getElementById("on-off").style.display = "none";
}

/*Function getNum collects user input and displays it in the calculator. Additionally, the entered text
is converted into numbers and assigned to the storedNumber variable.*/
function getNum(a){
    if(storeDisplayNum.length < 14){ /*This if() does not allow you to enter a digit longer than 14 characters.*/
        if(arithmeticChain.indexOf('%') > 0 
        && arithmeticChain.length > 2){
            /*If we want to count the percentage of a number, you can only give two digits,
            the first is the percentage and the second is the number (e.g. 2%5=0.1).This if() does not allow 
            you to enter more than two digits into our arithmetic operation.*/
        }else{
            storeDisplayNum += a;
            document.getElementById("current").innerHTML= storeDisplayNum;
        }
    }
    storedNumber = Number(storeDisplayNum);
}
/*-----------------------------------------------------------------------------------------------------*/

/*Function sum allows you to perform calculations entered by the user.*/
function sum(arr){
    let math = [...arr];

         while (math.indexOf('/') > 0 ){
            let calc = math[math.indexOf('/')-1] / math[math.indexOf('/')+1]
            math.splice(math.indexOf('/')-1,3,calc);
        }

        while (math.indexOf('*') > 0 ){
            let calc = math[math.indexOf('*')-1] * math[math.indexOf('*')+1]
            math.splice(math.indexOf('*')-1,3,calc) 
        }

        while (math.indexOf('-') > 0 ){
            let calc = math[math.indexOf('-')-1] - math[math.indexOf('-')+1]
            math.splice(math.indexOf('-')-1,3,calc);
        }

        while (math.indexOf('+') > 0 ){
            let calc = math[math.indexOf('+')-1] + math[math.indexOf('+')+1]
            math.splice(math.indexOf('+')-1,3,calc);
        }

        while (math.indexOf('%') > 0 ){
            let calc = (math[math.indexOf('%')-1]/100) * math[math.indexOf('%')+1]
            math.splice(math.indexOf('%')-1,3,calc);
        }
    return Number(math[0].toFixed(4));
}
/*-----------------------------------------------------------------------------------------------------*/

function change(){
    if(storedNumber > 0){
        storedNumber *= -1;
        document.getElementById("current").innerHTML= storedNumber;
    }else if(storedNumber < 0){
        storedNumber *= -1;
        document.getElementById("current").innerHTML= storedNumber;
    }
}

function push(a){
    if(storedNumber == undefined ){
    }else{
        if(arithmeticChain.indexOf('%') > 0){
            /* This if() does not allow you to do more than enter two digits if we are looking for a percentage of a number.
            The first digit is the percentage and the second is the number (e.g. 2%5=0.1).
            The rest of the actions will be blocked until the user clicks the equal sign. */
        }else{
            switch (a) {
                case '+':
                    arithmeticChain.push(storedNumber);
                    arithmeticChain.push('+')
        
                    storeDisplayNum = '';
                    storedNumber = 0;
                    document.getElementById("current").innerHTML= '';
                    document.getElementById("chain").innerHTML= arithmeticChain.join('');
                    break;
        
                case '-':
                    arithmeticChain.push(storedNumber);
                    arithmeticChain.push('-')
        
                    storeDisplayNum = '';
                    storedNumber = 0;
                    document.getElementById("current").innerHTML= '';
                    document.getElementById("chain").innerHTML= arithmeticChain.join('');
                    break;
        
                case '*':
                    arithmeticChain.push(storedNumber);
                    arithmeticChain.push('*')
        
                    storeDisplayNum = '';
                    storedNumber = 0;
                    document.getElementById("current").innerHTML= '';
                    document.getElementById("chain").innerHTML= arithmeticChain.join('');
                    break;
        
                case '/':
                    arithmeticChain.push(storedNumber);
                    arithmeticChain.push('/')
        
                    storeDisplayNum = '';
                    storedNumber = 0;
                    document.getElementById("current").innerHTML= '';
                    document.getElementById("chain").innerHTML= arithmeticChain.join('');
                    break;
    
                case '%':
                    arithmeticChain.push(storedNumber);
                    arithmeticChain.push('%')
        
                    storeDisplayNum = '';
                    storedNumber = 0;
                    document.getElementById("current").innerHTML= '';
                    document.getElementById("chain").innerHTML= arithmeticChain.join('');
                    break;
            
                default:
                    break;
            } 
        } 
    } 
}

function result(){
    arithmeticChain.push(storedNumber);
    document.getElementById("chain").innerHTML= `${arithmeticChain.join('')}=`;
    let doMath = sum(arithmeticChain);
    document.getElementById("current").innerHTML= doMath;
    storedNumber = doMath;
    storedNumber = '';
    storeDisplayNum = '';
    arithmeticChain = [];
}

function clearAll(){
    document.getElementById("chain").innerHTML= '';
    document.getElementById("current").innerHTML= '';
    storeDisplayNum = '';
    storedNumber = undefined;
    arithmeticChain = [];
}

function clearLast(){
    document.getElementById("current").innerHTML= '';
    storeDisplayNum = '';
    storedNumber = '';
}


