let age = prompt("Введіть ваш вік:");

if (!isNaN(age))
{
    if  ( age < 0 )
    {
        console.log("Вік не може бути негативним!");
    }
    else
    {
        switch (age % 10) {
          case 1:
            console.log("Ваш вік є " + age + " рік.");
            break;
          case 2:
          case 3:
          case 4:
            console.log("Ваш вік є " + age + " роки.");
            break;
          default:
            console.log("Ваш вік є " + age + " років.");
        }       
    }
}
else
{
    console.log("Ви ввели вік який не не є числом");
}