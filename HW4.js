let age = prompt("Enter your age:");

if (!isNaN(age))
{
    if  ( age < 0 )
    {
        console.log("Age can't be negative!");
    }
    else
    {
        console.log("Your age is " + age + " years. ");
    }
}
else
{
    console.log("Your age is not a number.");
}