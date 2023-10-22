var team = {
    name: 'Dynamo',
    players: 34,
    timeOfTraining: '9.15',
    coaches: {
        headCoach: 'Мірча Луческу',
        asistantCoach: 'Олег Гусєв'
    },
    getInfo: function () {
        for (const i in this) {
            console.log(i, this[i])
        }
    }
}

team.getInfo(); // Правильна інформація про об'єкт
team.doctors = {
        doctor1: 'Андрій Шморгун',
        doctor2: 'Ігор Конівець',
        doctor3: 'Анатолій Жучка'
    }; 'Нова властивість!'; // Додали властивість до об'єкта
console.log(' ');
team.getInfo(); // Виводить всі властивості, включаючи щойно додану.

var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн",

    price: function () {
        let result = 0;
        let currentServicePrice = 0;
        
        for (const i in this) {
            if (typeof this[i] == 'function')  continue; 

            currentServicePrice = +this[i].slice(0,-4);
            result = result + currentServicePrice;
        }
        return result;
    },

    minPrice: function () {
        let result = 0;
        let currentServicePrice = 0;
        
        for (const i in this) {
            if (typeof this[i] == 'function')  continue; 
            currentServicePrice = +this[i].slice(0,-4);
            
            if (result == 0) 
                result = currentServicePrice;
            
            if (currentServicePrice < result)
                result = currentServicePrice;
        }
        return result;
    },

    maxPrice: function () {
        let result = 0;
        let currentServicePrice = 0;
        
        for (const i in this) {
            if (typeof this[i] == 'function')  continue; 
            currentServicePrice = +this[i].slice(0,-4);
            
            if (result == 0) 
                result = currentServicePrice;

            if (currentServicePrice > result)
                result = currentServicePrice;
        }
        return result;
    }
};

services['Розбити скло'] = "200 грн"
console.log('загальна вартість послуг = ' + services.price() + ' грн');
console.log('мінімальна ціна =  ' + services.minPrice() + ' грн');
console.log('максимальна ціна = ' + services.maxPrice() + ' грн');