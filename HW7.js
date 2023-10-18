console.log(isNotANumber(5.1));
console.log(isNotANumber('5.1'));
console.log(isNotANumber(Infinity));
console.log(isNotANumber('3.4px'));
console.log(isNotANumber(3 * 'string'));
console.log(isNotANumber(isNaN));


//console.log("qwerty".padStart(4, '+'))
console.log(pad("qwerty", '+', 4, true))
//console.log("qwerty".padStart(8, '+'));
console.log(pad("qwerty", '+', 8, true));
//console.log("qwerty".padEnd(4, '+'))
console.log(pad("qwerty", '+', 4, false))
//console.log("qwerty".padEnd(8, '+'));
console.log(pad("qwerty", '+', 8, false));

checkProbabilityTheory(100);

function checkProbabilityTheory(count)
{
    let evenCount = 0;
    let oddCount = 0;
    for (i = 1; i <= count; i++)
    {
        let number = 100 + Math.floor(Math.random() * 901);
        if (number % 2) evenCount++;
        else oddCount++;
    }
    console.log("всі числа = " + count);
    console.log("парні числа = " + evenCount);
    console.log("непарні числа = " + oddCount);
    console.log("відсоток парних чисел до непарних = " + evenCount * 100 / oddCount + " %");
}

function pad(input, symbol, quantity, isFromStart) 
{
    if (quantity <= input.length) return input;
    
    let indent = '';
    for (i = 1; i <= quantity - input.length; i++)
    {
        indent = indent + symbol;
    }
    
    if (isFromStart)
       return indent + input;
    else
       return input + indent;
}

function isNotANumber(value) 
{
   return !(typeof (+value) === 'number' && isFinite(value));
}