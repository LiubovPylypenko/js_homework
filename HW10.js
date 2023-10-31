var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    }
];

console.log(validMailArray(arr));
console.log(isValid6CharsWithoutA("some anonymous4 text for search and test_ing"));

function validMailArray(contactArray) 
{
    let result = [];
    for (let i = 0; i<=contactArray.length - 1; i++) 
    {
        let email = contactArray[i].email;
        //console.log('email = ' +email);
        let domain = email.slice(email.indexOf('@') + 1);
        //console.log('domain = ' +domain);
        //console.log('isValidMail(email) = ' +isValidMail(email));
        //console.log('isValidDomain(domain) = ' +isValidDomain(domain));
        //console.log('isAllowedDomain(domain) = ' +isAllowedDomain(domain));
        if (isValidMail(email) && isValidDomain(domain) && isAllowedDomain(domain))
        {
            result.push(email);
        }
    }
    return result;
}

function isValidMail(mail)
{
	var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(mail);
}

function isValidDomain(domain)
{
	var re = /^[a-zA-Z0-9][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{1,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,3})$/;
    return re.test(domain);
}

function isAllowedDomain(domain)
{
	var re = /gmail.com|yahoo.com/;
    return re.test(domain);
}


function isValid6CharsWithoutA(inputText)
{
    var re = /[B-Z0-9_]{6,}/gi;
    return inputText.match(re);
}



