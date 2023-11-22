// Questo è il file che contiene tutto il codice JS della pagina web




let cars = [
    {
        marca: "Fiat",
        model: "Punto",
        typeOfFuel: "gpl",
        
    },
    {
        marca: "Toyota",
        model: "Yaris",
        typeOfFuel: "benzina",
        
    },
    {
        marca: "Mercedes",
        model: "AMG GT coupè",
        typeOfFuel: "benzina",
        
    },
    {
        marca: "Tesla",
        model: "Model S",
        typeOfFuel: "elettrica",
        
    },
    {
        marca: "Mini",
        model: "Clubman",
        typeOfFuel: "gpl",
        
    },
    {
        marca: "Lamborghini",
        model: "Urus",
        typeOfFuel: "benzina",
        
    },
    {
        marca: "Pagani",
        model: "Utopia",
        typeOfFuel: "benzina",
        
    },
    {
        marca: "Renault",
        model: "Megane E-Tech",
        typeOfFuel: "elettrica",
        
    },
    {
        marca: "Nissan",
        model: "Juke",
        typeOfFuel: "diesel",
        
    },
    {
        marca: "Alfa Romeo",
        model: "Giulia",
        typeOfFuel: "diesel",
        
    },
   
];


let autoBenzina = [];
let autoDiesel = [];
let autoRestanti = [];

cars.forEach(function(car){
    if (car.typeOfFuel == "benzina"){
        autoBenzina.push(car);
    }
    else if(car.typeOfFuel == "diesel"){
        autoDiesel.push(car);
    }
    else{
        autoRestanti.push(car);
    }
});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoRestanti);



