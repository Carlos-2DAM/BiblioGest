console.log("kjkj")
console.log("90")
console.log(5+80)

var antigua = "no se usa" //desuso
const constante = "no se cambia"
let incidencia = "se puede cambiar"

console.log(constante)
console.log(incidencia) 
console.log(antigua)

incidencia = "cerrada"
//constante = "cambia"
console.log(incidencia)

const monitor = "Carla"
const precio = 7
const precio2 = 7.5
const aprobado = true
const precio3 = "7"

console.log(monitor, typeof monitor)
console.log(precio, typeof precio)
console.log(precio2, typeof precio2)
console.log(aprobado, typeof aprobado)
console.log(precio3, typeof precio3)

let nodato = null
console.log(nodato, typeof nodato)

let colchonetas = 20
let colchonetaSala = 12
console.log ("Hay estas colchonetas: " + (colchonetas * colchonetaSala))

let saldo = 10
console.log(10 == "10")
console.log(saldo)

const articulo = "Cuaderno"
const cantidadArticulo = 3

console.log(articulo + " - unidades: " + cantidadArticulo)
console.log (`${articulo} - unidades: ${cantidadArticulo}`)

const etiquetaArmario = "Zona C"
console.log(etiquetaArmario.length)
console.log(etiquetaArmario[etiquetaArmario.length - 1])
console.log(etiquetaArmario[0])

const avisoEntrega = "Paquete listo para recoger"
console.log(avisoEntrega.includes("Paquete"))
console.log(avisoEntrega.indexOf("Paquete"))

const respuestaUsuario = "ENTREGADO"
console.log(respuestaUsuario.toLowerCase()=== "entregado")

const codigo = " EQ-47 ";
const codigoCorr = codigo.trim();
console.log(codigo)
console.log(codigoCorr)

//slice
console.log(codigoCorr.slice(0, 2))
console.log(codigoCorr)

//replace
const notas = "pendiente, revisado, pendiente"
console.log(notas.replaceAll("pendiente", "abierto"))

const documento = true
const validado = documento ? "Listo" : "No listo"
console.log(validado)