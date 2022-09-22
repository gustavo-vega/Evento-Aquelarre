const productos = []
const carrito = []

class Instrumento{
    constructor(id, nombre, precio, img){
        this.id = id
        this.nombre= nombre
        this.precio = precio
        this.img = img
    }

    listadoInstrumentos(){
        const card  = `
            <div class="card">
                <img src=${this.img} alt="parches"  width="150" height="150"/>
                <h4>${this.nombre}</h4>
                <p>${this.precio}</p>
                <button id=${this.id} class="btnAgregar">Comprar</button>
            </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
    agregarEvento(){
        const comprar = document.getElementById(this.id)
        console.log(this.id)
        const productoElegido = productos.find(product => product.id == this.id)
        comprar.addEventListener('click', () => agregarCarrito(productoElegido))
        // console.log(comprar)
    }
}

let bongo = new Instrumento( '001', 'bongo', 21643,'../imagenes/bongod.jpg')
let guitarra = new Instrumento('002', 'guitarra', 112889, '../imagenes/guitarra.jpg') 
let saxo = new Instrumento('003', 'saxo', 134152, '../imagenes/Saxo.jpg')
let bateria = new Instrumento('004', 'bateria', 203488, '../imagenes/bateri.jpg')
let correas = new Instrumento('005', 'correas',3899 , '../imagenes/correas.jpg')
let palillos = new Instrumento('006', 'palillos', 2209, '../imagenes/palillos.jpg')
let parches = new Instrumento('007', 'parches', 5316, '../imagenes/parchesa.jpg')
let puas = new Instrumento('008', 'puas', 590, '../imagenes/puas.jpg')

productos.push(bongo, guitarra, saxo, bateria, correas, palillos, parches, puas)

console.log(productos)

productos.forEach(e => {
    e.listadoInstrumentos()
})
productos.forEach(e => {
    e.agregarEvento()
})

function agregarCarrito(producto) {
    const enCarrito = carrito.find(prod => prod.id == producto.id)
    if(!enCarrito){
        carrito.push({...producto, cantidad: 1})
     } else {
        const carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
        carrito = [
            ...carritoFiltrado, 
            { ...enCarrito, cantidad: enCarrito.cantidad + 1}
        ]
     }
     console.log(carrito)
}


