let continuar = false;
do {
    let base = parseInt(prompt("Ingrese número a exponenciar:"));
    let exponente = parseInt(prompt("Ingrese el exponente"));
    let resultado = 1;
    if(isNaN(base) || isNaN(exponente)){
        alert("La base o el exponente no son de tipo numérico");
    }else{
        for(let i=0;i<exponente;i++){
            resultado *= base;
            };
            alert(`${base} a la ${exponente} es: ${resultado}`); 
    };
    continuar = parseInt(prompt("Deseas potenciar otro número? Inserta 1 para si o 0 para no"));  
}
while(continuar);