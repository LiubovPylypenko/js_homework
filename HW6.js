drawTriangle1(5, '*');
console.log();
drawTriangle2(5, '+');
console.log();
numbersAreNotMultiplesOf3();
console.log();
console.log(pow(2, 3));

function drawTriangle1 (height, symbol)
{
    for (i = 1; i <= height; i++)
    {
        let line = '';
        for (j = 1; j <= i; j++)
        {
            line = line + symbol;
        }
        console.log(line);
    }
}

function drawTriangle2 (height, symbol)
{
    let i = 1;
    while (i <= height)
    {
        let line = '';
        let j = 1;
        
        while (j <= i)
        {
            line = line + symbol;
            j++;
        }
        
        console.log(line);
        i++;
    }
}

function numbersAreNotMultiplesOf3()
{
    for (i = 1; i < 100; i++)
    {
        if (i%3) console.log(i);
    }
}

function pow(x,y)
{
    let result = 1;
    for (i = 0; i < y; i++)
    {
        result = result * x;
    }
    return result;
}