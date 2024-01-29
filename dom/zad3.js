class Auto {
    constructor(year, mileage, startingPrice) {
        this.year = year;
        this.mileage = mileage;
        this.startingPrice = startingPrice;
        this.finalPrice = startingPrice;
    }

    increaseStartingPrice() {
        this.startingPrice += 1000;
    }

    decreaseFinalPriceByAge() {
        const age = new Date().getFullYear() - this.year;
        this.finalPrice -= age * 1000;
    }

    decreaseFinalPriceByMileage() {
        const mileageDiscount = Math.floor(this.mileage / 100000) * 10000;
        this.finalPrice -= mileageDiscount;
    }

    addMileageAndYear(newMileage, newYear) {
        this.mileage += newMileage;
        this.year += newYear;
        this.decreaseFinalPriceByAge();
        this.decreaseFinalPriceByMileage();
    }
}

const car1 = new Auto(2018, 50000, 25000);
const car2 = new Auto(2024, 15000, 590000);
const car3 = new Auto(2006, 220000, 10000);

const cars = [car1, car2, car3];

const table = document.createElement("table");
const headerRow = table.insertRow();
const headers = ["Rok", "Przebieg", "Cena Wyjściowa", "Cena Końcowa"];

for (const header of headers) {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
}

for (const car of cars) {
    const row = table.insertRow();
    const data = [car.year, car.mileage, car.startingPrice, car.finalPrice];

    for (const value of data) {
        const cell = row.insertCell();
        cell.textContent = value;
    }
}


document.body.appendChild(table);