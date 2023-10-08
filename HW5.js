let measures = prompt("Enter units of measurement km - kilometers/ h - hours / kg - kilograms:");
let quantity = prompt("Enter quantity:");

if (!isNaN(quantity))
{
    switch(measures) {
      case 'km':
        console.log( quantity +" kilometers = " + quantity * 1000 + " meters");
        break;
      case 'h':
        console.log( quantity +" hours = " + quantity * 60 + " minutes");
        break;
      case 'kg':
        console.log( quantity +" kilograms = " + quantity * 1000 + " grams");
        break;
      default:
        console.log("Unknown unit of measuremnt");
    }
}
else
{
    console.log("Quantity is not a number");
}