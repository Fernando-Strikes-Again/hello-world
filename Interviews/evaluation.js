// tbd

function calcularDatos(datos){
    let resultados = {};

    for(let nombre in datos){
        let score = datos[nombre];

        let suma = score.reduce((acc, curr) => acc + curr, 0);
        let promedio = suma/score.length;

        resultados[nombre] = promedio;
    }

    return resultados;
}

const datosEntrada = {
    'John': [8,9,7],
    'Jane': [10,9,8,7],
    'Mike':[6,7,8]
};

const finalGrades = calcularDatos(datosEntrada);
console.log('Final grades are: ');

for(let nombre in finalGrades){
    console.log(`${nombre}: ${finalGrades[nombre].toFixed(2)}`)
}