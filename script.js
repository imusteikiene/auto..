// . Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą (pavyzdys nuotrauka su automobiliais)



class Car {
    constructor(brand, model, mileage, price, image) {
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.price = price;
        this.image = image;
    }
}

const carsData = [
    {
        brand: "Toyota",
        model: "Camry",
        mileage: 45000,
        price: 25000,
        image: "img1.jpg",
    },
    {
        brand: "Honda",
        model: "Accord",
        mileage: 35000,
        price: 23000,
        image: "img2.jpg",
    },
    {
        brand: "Ford",
        model: "Mustang",
        mileage: 20000,
        price: 35000,
        image: "img3.jpg",
    },
    {
        brand: "Chevrolet",
        model: "Camaro",
        mileage: 18000,
        price: 38000,
        image: "img4.jpg",
    },
    {
        brand: "Tesla",
        model: "Model S",
        mileage: 10000,
        price: 80000,
        image: "img5.jpg",
    },
];

const cars = carsData.map(data => new Car(data.brand, data.model, data.mileage, data.price, data.image));

function addCar() {
    const brand = document.getElementById("brandInput").value;
    const model = document.getElementById("modelInput").value;
    const mileage = document.getElementById("mileageInput").value;
    const price = document.getElementById("priceInput").value;
    const imageInput = document.getElementById("imageInput");

    if (brand && model && mileage && price && imageInput.files.length > 0) {
        const image = URL.createObjectURL(imageInput.files[0]);
        const car = new Car(brand, model, mileage, price, image);
        displayCar(car);
        clearForm();
    } else {
        alert("uzpildykite visus laukelius.");
    }
}

function displayCar(car) {
    const carList = document.getElementById("carList");

    const carBlock = document.createElement("div");
    carBlock.classList.add("carBlock");
    carBlock.innerHTML = `
        <img src="${car.image}" alt="${car.brand} ${car.model} ${car.mileage}" width="100">
        <p>${car.brand} ${car.model}</p>
        <p></p>
    `;
    carBlock.addEventListener("click", () => alert(`Price: $${car.price},  "Mileage :" ${car.mileage} `));

    carList.appendChild(carBlock);
}

function clearForm() {
    document.getElementById("carForm").reset();
}

// Pradinis automobilių atvaizdavimas
cars.forEach(displayCar);
