let storeDisplayNum = '';
let StoredNumber;

let arithmeticChain = [];


function getNum(a){
    if(storeDisplayNum.length < 14){
        storeDisplayNum += a;
        document.getElementById("current").innerHTML= storeDisplayNum;
    }
    StoredNumber = Number(storeDisplayNum);
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

        while (math.indexOf('-') > 0 ){
            let calc = math[math.indexOf('-')-1] - math[math.indexOf('-')+1]
            math.splice(math.indexOf('-')-1,3,calc);
        }

    return Number(math[0].toFixed(4));
}

function push(a){
    switch (a) {
        case '+':
            arithmeticChain.push(StoredNumber);
            arithmeticChain.push('+')

            storeDisplayNum = '';
            StoredNumber = 0;
            document.getElementById("current").innerHTML= '';
            document.getElementById("chain").innerHTML= arithmeticChain.join('');
            break;

        case '-':
            arithmeticChain.push(StoredNumber);
            arithmeticChain.push('-')

            storeDisplayNum = '';
            StoredNumber = 0;
            document.getElementById("current").innerHTML= '';
            document.getElementById("chain").innerHTML= arithmeticChain.join('');
            break;

        case '*':
            arithmeticChain.push(StoredNumber);
            arithmeticChain.push('*')

            storeDisplayNum = '';
            StoredNumber = 0;
            document.getElementById("current").innerHTML= '';
            document.getElementById("chain").innerHTML= arithmeticChain.join('');
            break;

        case '/':
            arithmeticChain.push(StoredNumber);
            arithmeticChain.push('/')

            storeDisplayNum = '';
            StoredNumber = 0;
            document.getElementById("current").innerHTML= '';
            document.getElementById("chain").innerHTML= arithmeticChain.join('');
            break;
    
        default:
            break;
    }
}

function result(){
    arithmeticChain.push(StoredNumber);
    document.getElementById("chain").innerHTML= `${arithmeticChain.join('')}=`;
    let doMath = sum(arithmeticChain);
    document.getElementById("current").innerHTML= doMath;
    StoredNumber = doMath
    arithmeticChain = [];
}

function clearAll(){
    document.getElementById("chain").innerHTML= '';
    document.getElementById("current").innerHTML= '';
    storeDisplayNum = '';
    StoredNumber = 0;
    arithmeticChain = [];
}

function clearLast(){
    document.getElementById("current").innerHTML= '';
    storeDisplayNum = '';
    StoredNumber = '';
}


