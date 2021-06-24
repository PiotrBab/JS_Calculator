let storeDisplayNum = '';
let storedNumber;

let arithmeticChain = [];

let test;

function getNum(a){
    if(storeDisplayNum.length < 14){
        if(arithmeticChain.indexOf('%') > 0 
        && arithmeticChain.length > 2){
        }else{
            storeDisplayNum += a;
            document.getElementById("current").innerHTML= storeDisplayNum;
        }
    }
    storedNumber = Number(storeDisplayNum);
}

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

function push(a){
    if(storedNumber == undefined ){
    }else{
        if(arithmeticChain.indexOf('%') > 0){

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
    storedNumber = doMath
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


