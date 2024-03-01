const fs = require("fs")
const colors = require("colors")


function multiplicar(base=5){
    resultado = "";
    console.log(colors.green("================================="))
    console.log(colors.green("Tabla de multiplicar del " + base))
    console.log(colors.green("=================================="))
    for(let indice=1; indice<=10; indice++){
        resultado += `${base} ${"x".red} ${indice} ${"=".blue} ${base * indice}\n`
    }
    console.log(resultado);
    fs.writeFile(`tabla_del_${base}.txt`, resultado, ()=>{
        console.log("Archivo creado con exito.".rainbow)
    })
}


module.exports = {
    multiplicar
}
