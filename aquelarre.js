const selectTag = document.getElementById('lista')

let instrumentos = []
let carrito = []

// objetos

class Instrumentos{
    constructor(instrumento, precio, id){
        this.instrumento = instrumento
        this.precio = precio
        this.id = id
    }
} 

let amplificador = new Instrumentos('amplificador', 17885, 1)
let bafles = new Instrumentos('bafles',20814, 2)
let auricular = new Instrumentos('auricular', 6990, 3)
let bongo = new Instrumentos('bongo', 21643, 4)
let microfono = new Instrumentos('microfono', 3990, 5)
let piano = new Instrumentos('piano', 3525000, 6)
let flauta = new Instrumentos('flauta', 22503, 7)
let trompeta = new Instrumentos('trompeta', 83218, 8)

// Arrays instrumentos

instrumentos.push(amplificador)
instrumentos.push(bafles)
instrumentos.push(auricular)
instrumentos.push(bongo)
instrumentos.push(microfono)
instrumentos.push(piano)
instrumentos.push(flauta)
instrumentos.push(trompeta)

console.log(instrumentos)

//aplicando DOM

instrumentos.forEach(Instrumentos=>{
    const option = document.createElement('option')
    option.innerText = `${Instrumentos.instrumento}: $${Instrumentos.precio}`
    selectTag.append(option)
})

const botonAgregar = document.createElement('button')
botonAgregar.innerText = 'Agregar Producto'
document.body.append(botonAgregar)

const botonComprar= document.createElement('button')
botonComprar.innerText = 'Comprar'
document.body.append(botonComprar)

//Aplicando Evento
botonAgregar.onclick = ()=>{
    const productoElegido = instrumentos[selectTag.selectedIndex]
    console.log(productoElegido)
    carrito.push(productoElegido)
    console.log(carrito.length)
}


botonComprar.onclick = () =>{
    console.log(carrito)
    let totalCompra = 0
    carrito.forEach ((instrumentos)=>{
    totalCompra = totalCompra + instrumentos.precio
    })

alert(`El Total de la compra es de ${totalCompra}`)
}