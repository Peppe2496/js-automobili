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


for(let i=0; i<autoBenzina.length; i++){
    document.getElementById("card").innerHTML +=`
    <div class="card">
    <div class="card-header">
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Marca auto: ${autoBenzina[i].marca}</li>
      <li class="list-group-item">${autoBenzina[i].model}</li>
      <li class="list-group-item">${autoBenzina[i].typeOfFuel}</li>
    </ul>
  </div>
    
  `
}

for(let i=0; i<autoDiesel.length; i++){
    document.getElementById("card").innerHTML +=`
    <div class="card">
    <div class="card-header">
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${autoDiesel[i].marca}</li>
      <li class="list-group-item">${autoDiesel[i].model}</li>
      <li class="list-group-item">${autoDiesel[i].typeOfFuel}</li>
    </ul>
  </div>
    
  `
}


for(let i=0; i<autoRestanti.length; i++){
    document.getElementById("card").innerHTML +=`
    <div class="card">
    <div class="card-header">
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${autoRestanti[i].marca}</li>
      <li class="list-group-item">${autoRestanti[i].model}</li>
      <li class="list-group-item">${autoRestanti[i].typeOfFuel}</li>
    </ul>
  </div>
    
  `
}






function addCar(event) {
    event.preventDefault();

    console.log("AGGIUNTO UNA NUOVA AUTO!");

    let newMarca = document.getElementById("Marca").value;
    let newModel = document.getElementById("Model").value;
    let newTypeOfFuel = document.getElementById("Type-of-Fuel").value;


    


    let newCar = {
        marca: newMarca,
        model: newModel,
        typeOfFuel: newTypeOfFuel,
        
    };

    cars.push(newCar);

    // Posso ora costruirmi la CARD dello studente completo usando il template literal
    // e le informazioni che ho a disposizione e che mi sono preventivamente costruito ( lista materie preferite )
    let card = `
    <div class="card">
    <div class="card-header">
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${newCar.marca}</li>
      <li class="list-group-item">${newCar.model}</li>
      <li class="list-group-item">${newCar.typeOfFuel}</li>
    </ul>
  </div>
    `;

    // innietto la card costruita tramite la concatenazione del vecchio HTML che c'è con la nuova card da inserire
    document.getElementById("card").innerHTML += card;

}

