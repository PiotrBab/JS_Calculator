let storeDisplayNum = '';
let storedNumber;

let arithmeticChain = [];

/*Function getNum() collects user input and displays it in the calculator.*/
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

/*Function sum() allows you to perform calculations entered by the user.*/
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

/*Function change() allows you to perform calculations entered by the user.*/
function change(){
    if(storedNumber > 0){
        storedNumber *= -1;
        document.getElementById("current").innerHTML= storedNumber;
    }else if(storedNumber < 0){
        storedNumber *= -1;
        document.getElementById("current").innerHTML= storedNumber;
    }
}
/*-----------------------------------------------------------------------------------------------------*/

/* The push() function inputs a given number and an arithmetic operation. */
function push(a){
    if(storedNumber != undefined ){
        if(arithmeticChain.indexOf('%') < 0){/*This part of the if() condition does not allow another
        arithmetic operation to be entered if the user starts counting a percentage of a number.*/
            if(storedNumber != ''){/* This part of the if() condition does not allow another arithmetic
            operation to be entered if the user has not entered any numbers.*/
                switch (a) {/*This switch checks what arithmetic operation the user wants to perform.
                It pushes in the entered number and arithmetic character.*/
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
            }else{/*This part of the if() condition allows the user to change the mathematical operation entered.*/
                    arithmeticChain.pop();
                    arithmeticChain.push(a);
                    document.getElementById("chain").innerHTML= arithmeticChain.join('');
            } 
        }
    } 
}
/*-----------------------------------------------------------------------------------------------------*/

/*The result() function returns the result from our action.*/
function result(){
    if(arithmeticChain.length != 0){/*This if() checks if the user has entered an action. If not, the 
    function will not execute.*/
        if(storeDisplayNum == ''){/*This if() checks if the user has entered at least one arithmetic operation and a second digit.If not, the "=" character returns the first digit entered.*/
            document.getElementById("chain").innerHTML= `${arithmeticChain[0]}=`;
            document.getElementById("current").innerHTML= arithmeticChain[0];
            storedNumber = arithmeticChain[0];
            storeDisplayNum = '';
            arithmeticChain = [];
        }else{
            arithmeticChain.push(storedNumber);
            document.getElementById("chain").innerHTML= `${arithmeticChain.join('')}=`;
            let doMath = sum(arithmeticChain);
            document.getElementById("current").innerHTML= doMath;
            storedNumber = doMath;
            storeDisplayNum = '';
            arithmeticChain = [];
        }
    }
}
/*-----------------------------------------------------------------------------------------------------*/

/*The clearAll() function restarts the data entered into the calculator.*/
function clearAll(){
    document.getElementById("chain").innerHTML= '';
    document.getElementById("current").innerHTML= '';
    storeDisplayNum = '';
    storedNumber = undefined;
    arithmeticChain = [];
}
/*-----------------------------------------------------------------------------------------------------*/

/*The clearLast() function restarts the last number before using an arithmetic operation.*/
function clearLast(){
    document.getElementById("current").innerHTML= '';
    storeDisplayNum = '';
    storedNumber = '';
}
/*-----------------------------------------------------------------------------------------------------*/


