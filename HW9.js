
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
myBlend(arr);
console.log(arr);

function myBlend(arr) 
{
  for (let i = arr.length - 1; i > 0; i--) 
  {
    let j = Math.floor(Math.random() * (i + 1)); // випадковий індекс від 0 до i
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const company = {
  name: 'Велика Компанія',
  type:'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків'
    }
  ]
};

console.log(findValueByKey(company,'Клієнт 1.2'));
console.log(findValueByKey(company,'Велика Компанія'));
console.log(findValueByKey(company,'Клієнт 2'));

function findValueByKey(theObject, companyName) {
    var result = null;
    if(Array.isArray(theObject)) {
        for(var i = 0; i < theObject.length; i++) {
            result = findValueByKey(theObject[i], companyName);
            if (result) {
                break;
            }   
        }
    }
    else
    {
        for(var prop in theObject) {
            if(prop == 'name') {
                if(theObject[prop] == companyName) {
                    result = theObject;
                    break;
                }
            }
            if(typeof theObject[prop] == 'object' || Array.isArray(theObject[prop])) {
                result = findValueByKey(theObject[prop], companyName);
                if (result) {
                    break;
                }
            } 
        }
    }
    return result;
}

