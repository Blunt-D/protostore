function operacion(articulo, cantidad) {
    switch(articulo.toUpperCase()) {
        case "POLERA":
            let tallaPolera = prompt("Elige una talla entre S, M o L")
            let colorPolera = prompt("Escribe 'negro' si deseas poleras color negro\nEscribe 'blanco' si deseas poleras color blanco")
            console.log(tallaPolera);
            console.log(colorPolera);
            if(((tallaPolera.toUpperCase() === "S") || (tallaPolera.toUpperCase() === "M") || (tallaPolera.toUpperCase() === "L")) && ((colorPolera.toUpperCase() === "NEGRO") || (colorPolera.toUpperCase() === "BLANCO"))){
                alert(`Has comprado ${cantidad} polera(s) de color ${colorPolera.toLowerCase()} y talla ${tallaPolera.toUpperCase()} a ${cantidad*12000} pesos chilenos.`)
            }else {
                alert("Ingrese datos válidos")
            }
            break;
        case "BOLSO": 
            alert(`Has comprado ${cantidad} bolsa(s) por ${8000*cantidad} pesos chilenos.`)
            break;
        default:
            alert("Ingresa un artículo válido.")
            break;
    }
} 


    let repetir = prompt("Deseas realizar una compra? Si/No")
    if(repetir.toUpperCase() === "SI"){
        while(repetir.toUpperCase() === "SI"){
    let articulo = prompt("Escribe 'polera' si deseas comprar poleras\nEscribe 'bolso' si deseas comprar boslas de mano");
    let cantidad = prompt("Ingresa la cantidad de artículos que deseas comprar.")
        if(cantidad > 0){  
        operacion(articulo, cantidad);
        }else {
        alert("Ingrese una cantidad válida")
    }
    repetir = prompt("deseas realizar otra compra? Si/No")
    }
}
alert("Muchas gracias por su visita");